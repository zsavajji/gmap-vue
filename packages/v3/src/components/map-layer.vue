<template>
  <div class="gmv-map-container">
    <div ref="gmvMap" class="gmv-map"></div>
    <div class="gmv-map-hidden">
      <!-- @slot The default slot is wrapped in a class that sets display: none; so by default any component you add to your map will be invisible. This is ok for most of the supplied components that interact directly with the Google map object, but it's not good if you want to bring up things like toolboxes, etc. -->
      <slot></slot>
    </div>
    <!-- @slot This slot must be used if you want to display content within the responsive wrapper for the map.  -->
    <slot name="visible"></slot>
  </div>
</template>

<script lang="ts" setup>
import {
  bindGoogleMapsEventsToVueEventsOnSetup,
  bindPropsWithGoogleMapsSettersAndGettersOnSetup,
  getComponentEventsConfig,
  getComponentPropsConfig,
  getPropsValuesWithoutOptionsProp,
  onMountedResizeBusHook,
  onUnmountedResizeBusHook,
  twoWayBindingWrapper,
  useGoogleMapsApiPromiseLazy,
  useMapPromise,
  useMapPromiseDeferred,
  usePluginOptions,
  useResizeBus,
  watchPrimitivePropertiesOnSetup,
} from '@/composables';
import type { IMapLayerVueComponentProps } from '@/interfaces';
import { $mapPromise } from '@/keys';
import type { Emitter, EventType } from 'mitt';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watch,
} from 'vue';

/**
 * Map component
 * @displayName GmvMap
 * @see [source code](/guide/map.html#source-code)
 * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/basics)
 * @see [Official reference](https://developers.google.com/maps/documentation/javascript/reference/map)
 */

/*******************************************************************************
 * DEFINE COMPONENT PROPS
 ******************************************************************************/
const props = withDefaults(
  defineProps<{
    backgroundColor?: string;
    center: google.maps.LatLng | google.maps.LatLngLiteral;
    clickableIcons?: boolean;
    controlSize?: number;
    disableDefaultUI?: boolean;
    draggableCursor?: string;
    draggingCursor?: string;
    fullscreenControl?: boolean;
    fullscreenControlOptions?: google.maps.FullscreenControlOptions;
    gestureHandling?: 'cooperative' | 'greedy' | 'none' | 'auto';
    heading?: number;
    isFractionalZoomEnabled?: boolean;
    keyboardShortcuts?: boolean;
    mapTypeControl?: boolean;
    mapTypeControlOptions?: google.maps.MapTypeControlOptions;
    mapTypeId?: google.maps.MapTypeId;
    maxZoom?: number;
    minZoom?: number;
    noClear?: boolean;
    panControl?: boolean;
    panControlOptions?: google.maps.PanControlOptions;
    restriction?: google.maps.MapRestriction;
    rotateControl?: boolean;
    rotateControlOptions?: google.maps.RotateControlOptions;
    scaleControl?: boolean;
    scaleControlOptions?: google.maps.ScaleControlOptions;
    streetView?: google.maps.StreetViewPanorama;
    streetViewControl?: boolean;
    styles?: google.maps.MapTypeStyle[];
    tilt?: number;
    zoom?: number;
    zoomControl?: boolean;
    zoomControlOptions?: google.maps.ZoomControlOptions;
    resizeBus?: Emitter<Record<EventType, unknown>>;
    options?: { [key: string]: any };
  }>(),
  {
    mapTypeId: globalThis?.google?.maps?.MapTypeId?.ROADMAP || 'roadmap',
    clickableIcons: true,
    disableDefaultUI: false,
    fullscreenControl: true,
    gestureHandling: 'auto',
    keyboardShortcuts: true,
    mapTypeControl: true,
    panControl: true,
    rotateControl: true,
    scaleControl: true,
    streetViewControl: true,
    zoomControl: true,
  }
);

/*******************************************************************************
 * TEMPLATE REF, ATTRIBUTES AND EMITTERS
 ******************************************************************************/
const gmvMap = ref<HTMLElement | null>(null);
const emits = defineEmits(getComponentEventsConfig('GmvMap'));

/*******************************************************************************
 * RECYCLE KEY
 ******************************************************************************/
const recyclePrefix = '__gmc__';

/**
 * Get the recycle key of the map
 * @method getRecycleKey
 * @returns {void}
 * @public
 */
function getRecycleKey(): string {
  return props?.options?.recycle
    ? `${recyclePrefix}${props?.options.recycle}`
    : recyclePrefix;
}

/*******************************************************************************
 * MAP
 ******************************************************************************/
const excludedEvents = usePluginOptions()?.excludeEventsOnAllComponents?.();
let mapInstance: google.maps.Map | undefined;

/*******************************************************************************
 * PROVIDE
 ******************************************************************************/
const mapPromiseDeferred = useMapPromiseDeferred();
const promise = useMapPromise();
provide($mapPromise, promise);

/*******************************************************************************
 * RESIZE BUS
 ******************************************************************************/
const { currentResizeBus, _delayedResizeCallback } = useResizeBus();
let { _resizeCallback } = useResizeBus();

/**
 * This method trigger the resize event of Google Maps
 * @method resize
 * @returns {void}
 * @public
 */
function resize(): void {
  if (mapInstance) {
    google.maps.event.trigger(mapInstance, 'resize');
  }
}

/**
 * Preserve the previous center when resize the map
 * @method resizePreserveCenter
 * @returns {void}
 * @public
 */
function resizePreserveCenter(): void {
  if (!mapInstance) {
    return;
  }

  const oldCenter = mapInstance.getCenter();
  google.maps.event.trigger(mapInstance, 'resize');

  if (oldCenter) {
    mapInstance.setCenter(oldCenter);
  }
}

/*******************************************************************************
 * COMPUTED
 ******************************************************************************/
const finalLat = computed(() => {
  if (!props.center) {
    return console.warn('center is not defined');
  }

  return typeof props.center.lat === 'function'
    ? props.center.lat()
    : props.center.lat;
});
const finalLng = computed(() => {
  if (!props.center) {
    return console.warn('center is not defined');
  }

  return typeof props.center.lng === 'function'
    ? props.center.lng()
    : props.center.lng;
});
const finalLatLng = computed(
  () =>
    ({ lat: finalLat.value, lng: finalLng.value } as google.maps.LatLngLiteral)
);

/*******************************************************************************
 * METHODS
 ******************************************************************************/
/**
 * Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).
 * @method panBy
 * @param {number} x - Number of pixels to move the map in the x direction.
 * @param {number} y - Number of pixels to move the map in the y direction.
 * @returns {void}
 * @public
 */
function panBy(x: number, y: number): void {
  if (mapInstance) {
    mapInstance.panBy(x, y);
  }
}

/**
 * Changes the center of the map to the given LatLng. If the change is less than both the width and height of the map, the transition will be smoothly animated.
 * @method panTo
 * @param {(LatLng|LatLngLiteral)} latLng - The new center latitude/longitude of the map. (types `LatLng|LatLngLiteral`)
 * @returns {void}
 * @public
 */
function panTo(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void {
  if (mapInstance) {
    mapInstance.panTo(latLng);
  }
}

/**
 * Pans the map by the minimum amount necessary to contain the given LatLngBounds. It makes no guarantee where on the map the bounds will be, except that the map will be panned to show as much of the bounds as possible inside {currentMapSizeInPx} - {padding}. For both raster and vector maps, the map's zoom, tilt, and heading will not be changed.
 * @method panToBounds
 * @param {(LatLngBounds|LatLngBoundsLiteral)} latLngBounds - The bounds to pan the map to. (types: `LatLngBounds|LatLngBoundsLiteral`)
 * @param {(number|Padding)} [padding] - optional Padding in pixels. A number value will yield the same padding on all 4 sides. The default value is 0. (types: `number|Padding`)
 * @returns {void}
 * @public
 */
function panToBounds(
  latLngBounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
  padding: number | google.maps.Padding
): void {
  if (mapInstance) {
    mapInstance.panToBounds(latLngBounds, padding);
  }
}

/**
 * Sets the viewport to contain the given bounds.
 Note: When the map is set to display: none, the fitBounds function reads the map's size as 0x0, and therefore does not do anything. To change the viewport while the map is hidden, set the map to visibility: hidden, thereby ensuring the map div has an actual size. For vector maps, this method sets the map's tilt and heading to their default zero values.
 * @method fitBounds
 * @param {(LatLngBounds|LatLngBoundsLiteral)} bounds - Bounds to show. (types: `LatLngBounds|LatLngBoundsLiteral`)
 * @param {(number|Padding)} [padding] - optional Padding in pixels. The bounds will be fit in the part of the map that remains after padding is removed. A number value will yield the same padding on all 4 sides. Supply 0 here to make a fitBounds idempotent on the result of getBounds. (types: `number|Padding`)
 * @returns {void}
 * @public
 */
function fitBounds(
  bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
  padding: number | google.maps.Padding
): void {
  if (mapInstance) {
    mapInstance.fitBounds(bounds, padding);
  }
}

/*******************************************************************************
 * WATCHERS
 ******************************************************************************/
watch(
  () => props.zoom,
  (newVal, oldValue) => {
    if (mapInstance && newVal && newVal !== oldValue) {
      mapInstance.setZoom(newVal);
    }
  }
);

/*******************************************************************************
 * HOOKS
 ******************************************************************************/
onMounted(() => {
  useGoogleMapsApiPromiseLazy()
    .then(() => {
      if (!gmvMap.value) {
        throw new Error(`we can find the template ref: 'gmvMap'`);
      }

      const mapLayerOptions: Partial<IMapLayerVueComponentProps> = {
        ...getPropsValuesWithoutOptionsProp(props),
        ...props.options,
      };

      const recycleKey = getRecycleKey();

      if (props?.options?.recycle && window[recycleKey]) {
        gmvMap.value.appendChild(window[recycleKey].div);
        mapInstance = window[recycleKey].map as google.maps.Map;
        mapInstance.setOptions(mapLayerOptions);
      } else {
        mapInstance = new google.maps.Map(gmvMap.value, mapLayerOptions);
        window[recycleKey] = { map: mapInstance };
      }

      onMountedResizeBusHook(mapInstance, props, resizePreserveCenter);

      const mapLayerPropsConfig = getComponentPropsConfig('GmvMap');
      const mapLayerEventsConfig = getComponentEventsConfig('GmvMap', 'auto');

      // binding properties (two and one way)
      bindPropsWithGoogleMapsSettersAndGettersOnSetup(
        mapLayerPropsConfig,
        mapInstance,
        emits,
        props
      );

      // Auto bind all events by default
      bindGoogleMapsEventsToVueEventsOnSetup(
        mapLayerEventsConfig,
        mapInstance,
        emits,
        excludedEvents
      );

      // manually trigger center and zoom
      twoWayBindingWrapper(
        (
          increment: () => void,
          decrement: () => void,
          shouldUpdate: () => boolean
        ) => {
          mapInstance?.addListener('center_changed', () => {
            if (shouldUpdate()) {
              /**
               * This event is fired when the map center property changes. It sends the position displayed at the center of the map. If the center or bounds have not been set then the result is undefined. (types: `LatLng|undefined`)
               *
               * @event center_changed
               * @type {(LatLng|undefined)}
               */
              emits('center_changed', mapInstance?.getCenter());
            }

            decrement();
          });

          const updateCenter = () => {
            increment();

            mapInstance?.setCenter(finalLatLng.value);
          };

          watchPrimitivePropertiesOnSetup(
            ['finalLat', 'finalLng'],
            updateCenter,
            { finalLat, finalLng }
          );
        }
      );

      mapInstance?.addListener('zoom_changed', () => {
        /**
         * This event is fired when the map zoom property changes. It sends the zoom of the map. If the zoom has not been set then the result is undefined. (types: `number|undefined`)
         *
         * @event zoom_changed
         * @type {(number|undefined)}
         */
        emits('zoom_changed', mapInstance?.getZoom());
      });
      mapInstance?.addListener('bounds_changed', () => {
        /**
         * This event is fired when the viewport bounds have changed. It sends The lat/lng bounds of the current viewport.
         *
         * @event bounds_changed
         * @type {LatLngBounds}
         */
        emits('bounds_changed', mapInstance?.getBounds());
      });

      if (!mapPromiseDeferred.resolve) {
        throw new Error('mapPromiseDeferred.resolve is undefined');
      }

      mapPromiseDeferred.resolve(mapInstance);
      return mapInstance;
    })
    .catch((error) => {
      throw error;
    });
});

onBeforeUnmount(() => {
  const recycleKey = getRecycleKey();
  if (window[recycleKey]) {
    window[recycleKey].div = mapInstance?.getDiv();
  }
});

onUnmounted(() => {
  onUnmountedResizeBusHook();
});

/*******************************************************************************
 * RENDERS
 ******************************************************************************/

/*******************************************************************************
 * EXPOSE
 ******************************************************************************/
defineExpose({
  mapInstance,
  panBy,
  panTo,
  panToBounds,
  fitBounds,
  currentResizeBus,
  _resizeCallback,
  _delayedResizeCallback,
  resize,
  resizePreserveCenter,
  getRecycleKey,
});
</script>

<style lang="stylus" scoped>
.gmv-map-container {
  position: relative;

  .gmv-map {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  .gmv-map-hidden {
    display: none;
  }
}
</style>
