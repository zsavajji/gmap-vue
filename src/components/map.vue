/* vim: set softtabstop=2 shiftwidth=2 expandtab : */

<template>
  <div class="vue-map-container">
    <div ref="vue-map" class="vue-map"></div>
    <slot></slot>
  </div>
</template>

<script>
import _ from 'lodash';

import {loaded} from '../manager.js';
import {DeferredReadyMixin} from '../deferredReady.js';
import eventsBinder from '../utils/eventsBinder.js';
import propsBinder from '../utils/propsBinder.js';
import Vue from 'vue'
import {DeferredReady} from '../deferredReady.js'
import getPropsMixin from '../utils/getPropsValuesMixin.js'

Vue.use(DeferredReady);

const props = {
  center: {
    required: true,
    twoWay: true,
    type: Object
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number
  },
  heading: {
    type: Number,
    twoWay: true,
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  bounds: {
    twoWay: true,
    type: Object,
  },
  projection: {
    twoWay: true,
    type: Object,
  },
  tilt: {
    twoWay: true,
    type: Number,
  },
  options: {
    type: Object,
    default () {return {}}
  }
};

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'idle',
  'mousemove',
  'mouseout',
  'mouseover',
  'resize',
  'rightclick',
  'tilesloaded',
];

const callableMethods = [
  'panBy',
  'panTo',
  'panToBounds',
  'fitBounds'
];

const methods = {
  resize() {
    if (this.mapObject) {
      google.maps.event.trigger(this.mapObject, 'resize');

      // FIXME: In version 1, we preserved the center of the map
    }
  }
};

const eventListeners = {}

_.each(callableMethods, function (methodName) {
   const applier = function() {
    if (this.mapObject) {
      this.mapObject[methodName].apply(this.mapObject, arguments);
    }
  }
  eventListeners['g-' + methodName] = applier;
  methods[methodName] = applier;
});

export default Vue.extend({
  mixins: [getPropsMixin, DeferredReadyMixin],
  props: props,
  replace: false, // necessary for css styles

  created() {
    this.mapCreated = new Promise((resolve, reject) => {
      this.mapCreatedDeferred = {resolve, reject}
    });
  },

  deferredReady() {
    return loaded.then(() => {
      // getting the DOM element where to create the map
      const element = this.$refs['vue-map'];

      // creating the map
      const copiedData = _.clone(this.getPropsValues());
      delete copiedData.options;
      const options = _.clone(this.options);
      _.assign(options, copiedData);
      this.mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      propsBinder(this, this.mapObject, _.omit(props, ['center', 'zoom', 'bounds']));

      // manually trigger center and zoom
      this.mapObject.addListener('center_changed', () => {
        this.$emit('center_changed', this.mapObject.getCenter())
        this.$emit('bounds_changed', this.mapObject.getBounds())
      })
      this.mapObject.addListener('zoom_changed', () => {
        this.$emit('zoom_changed', this.mapObject.getZoom())
        this.$emit('bounds_changed', this.mapObject.getBounds())
      })

      //binding events
      eventsBinder(this, this.mapObject, events);

      this.mapCreatedDeferred.resolve(this.mapObject);

      return this.mapCreated;
    })
    .catch((error) => {
      throw error;
    });
  },
  methods: methods
})
</script>

<style lang="less">

.full() {
  width: 100%;
  height:100%;
}

.vue-map-container {
  .full();
  .vue-map {
    .full();
  }
}

</style>
