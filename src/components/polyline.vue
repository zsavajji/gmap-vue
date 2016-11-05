/* vim: set softtabstop=2 shiftwidth=2 expandtab : */

<script>

import _ from 'lodash';

import eventBinder from '../utils/eventsBinder.js'
import propsBinder from '../utils/propsBinder.js'
import MapElementMixin from './mapElementMixin';
import getPropsValuesMixin from '../utils/getPropsValuesMixin.js'

const props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean,
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  },
  deepWatch: {
    type: Boolean,
    default: false,
  }
}

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'rightclick'
]

export default {
  mixins: [MapElementMixin, getPropsValuesMixin],
  props: props,

  render() { return '' },

  destroyed () {
    if (this.$polyLineObject) {
      this.$polyLineObject.setMap(null);
    }
  },

  deferredReady() {
    const options = _.clone(this.getPropsValues());
    delete options.options;
    _.assign(options, this.options);
    this.$polyLineObject = new google.maps.Polyline(options);
    this.$polyLineObject.setMap(this.$map);

    propsBinder(this, this.$polyLineObject, _.omit(props, ['deepWatch', 'path']));
    eventBinder(this, this.$polyLineObject, events);

    this.$watch('path', (path) => {
      if (path) {
        clearEvents();

        this.$polyLineObject.setPaths(path);

        const mvcPath = this.$polyLineObject.getPath();
        const eventListeners = [];

        const updatePaths = () => {
          this.$emit('g-path_changed', this.$polyLineObject.getPath())
        }

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)])
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)])
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)])

        clearEvents = () => {
          eventListeners.map(([obj, listenerHandle]) =>
            obj.removeListener(listenerHandle))
        }
      }
    }, {
      deep: this.deepWatch
    });

    // Display the map
    this.$polyLineObject.setMap(this.$map);
  },
}

</script>
