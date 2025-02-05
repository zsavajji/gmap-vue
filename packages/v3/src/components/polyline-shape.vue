<script lang="ts" setup>
import {
  bindGoogleMapsEventsToVueEventsOnSetup,
  bindPropsWithGoogleMapsSettersAndGettersOnSetup,
  getComponentEventsConfig,
  getComponentPropsConfig,
  getPropsValuesWithoutOptionsProp,
  usePluginOptions,
  useShapesHelpers,
} from '@/composables';
import type { IPolylineShapeVueComponentProps } from '@/interfaces';
import { $mapPromise, $polylineShapePromise } from '@/keys';
import { inject, onUnmounted, provide, watch } from 'vue';

/**
 * PolyLine component
 * @displayName GmvPolyline
 * @see [source code](/guide/polyline.html#source-code)
 * @see [official docs](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Polyline)
 * @see [official reference](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Polyline)
 */

/*******************************************************************************
 * DEFINE COMPONENT PROPS
 ******************************************************************************/
const props = withDefaults(
  defineProps<{
    clickable?: boolean;
    draggable?: boolean;
    editable?: boolean;
    geodesic?: boolean;
    icons?: Array<google.maps.IconSequence>;
    path?:
      | google.maps.MVCArray<google.maps.LatLng>
      | Array<google.maps.LatLng | google.maps.LatLngLiteral>;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    visible?: boolean;
    zIndex?: number;
    deepWatch?: boolean;
    options?: Record<string, unknown>;
  }>(),
  {
    clickable: true,
    draggable: false,
    editable: false,
    geodesic: false,
    visible: true,
    deepWatch: false,
  }
);

/*******************************************************************************
 * TEMPLATE REF, ATTRIBUTES, EMITTERS AND SLOTS
 ******************************************************************************/
const emits = defineEmits(getComponentEventsConfig('GmvPolyline'));

/*******************************************************************************
 * INJECT
 ******************************************************************************/
const mapPromise = inject($mapPromise);

if (!mapPromise) {
  throw new Error('The map promise was not built');
}

/*******************************************************************************
 * POLYLINE SHAPE
 ******************************************************************************/
const excludedEvents = usePluginOptions()?.excludeEventsOnAllComponents?.();
let polylineShapeInstance: google.maps.Polyline | undefined;
const promise = mapPromise
  ?.then((mapInstance) => {
    if (!mapInstance) {
      throw new Error('the map instance was not created');
    }

    const polylineOptions: IPolylineShapeVueComponentProps & {
      map: google.maps.Map | undefined;
      [key: string]: any;
    } = {
      map: mapInstance,
      ...getPropsValuesWithoutOptionsProp(props),
      ...props.options,
    };

    polylineShapeInstance = new google.maps.Polyline(polylineOptions);

    const polylineShapePropsConfig = getComponentPropsConfig('GmvPolyline');
    const polylineShapeEventsConfig = getComponentEventsConfig(
      'GmvPolyline',
      'auto'
    );

    bindPropsWithGoogleMapsSettersAndGettersOnSetup(
      polylineShapePropsConfig,
      polylineShapeInstance,
      emits,
      props
    );
    bindGoogleMapsEventsToVueEventsOnSetup(
      polylineShapeEventsConfig,
      polylineShapeInstance,
      emits,
      excludedEvents
    );

    return polylineShapeInstance;
  })
  .catch((error) => {
    throw error;
  });

provide($polylineShapePromise, promise);

/*******************************************************************************
 * COMPUTED
 ******************************************************************************/

/*******************************************************************************
 * METHODS
 ******************************************************************************/
const { clearEvents, updatePathOrPaths } = useShapesHelpers();

/*******************************************************************************
 * WATCHERS
 ******************************************************************************/
const pathEventListeners: [
  google.maps.MVCArray<google.maps.LatLng>,
  google.maps.MapsEventListener
][] = [];

watch(
  () => props.path,
  (newValue, oldValue) => {
    if (polylineShapeInstance) {
      if (props.path && newValue && newValue !== oldValue) {
        clearEvents(pathEventListeners);

        polylineShapeInstance.setPath(newValue);

        const mvcPath = polylineShapeInstance.getPath();

        pathEventListeners.push([
          mvcPath,
          mvcPath.addListener(
            'insert_at',
            updatePathOrPaths(
              'path_changed',
              polylineShapeInstance.getPath,
              emits
            )
          ),
        ]);
        pathEventListeners.push([
          mvcPath,
          mvcPath.addListener(
            'remove_at',
            updatePathOrPaths(
              'path_changed',
              polylineShapeInstance.getPath,
              emits
            )
          ),
        ]);
        pathEventListeners.push([
          mvcPath,
          mvcPath.addListener(
            'set_at',
            updatePathOrPaths(
              'path_changed',
              polylineShapeInstance.getPath,
              emits
            )
          ),
        ]);
      }
    }
  },
  { deep: props.deepWatch, immediate: true }
);
/*******************************************************************************
 * HOOKS
 ******************************************************************************/
onUnmounted(() => {
  if (polylineShapeInstance) {
    polylineShapeInstance.setMap(null);
  }
});

/*******************************************************************************
 * RENDERS
 ******************************************************************************/

/*******************************************************************************
 * EXPOSE
 ******************************************************************************/
defineExpose({ polylineShapeInstance });
</script>
