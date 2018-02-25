import omit from 'lodash/omit'

import {loaded} from '../manager.js'
import bindEvents from '../utils/bindEvents.js'
import {bindProps, getPropsValues} from '../utils/bindProps.js'
import mountableMixin from '../utils/mountableMixin.js'

import TwoWayBindingWrapper from '../utils/TwoWayBindingWrapper.js'

const props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true,
  },
  options: {
    twoWay: false,
    type: Object,
    default () { return {} }
  }
}

const events = [
  'closeclick',
  'status_changed',
]

// Other convenience methods exposed by Vue Google Maps
const customMethods = {
  resize () {
    if (this.$panoObject) {
      google.maps.event.trigger(this.$panoObject, 'resize')
    }
  },
}

// Methods is a combination of customMethods and linkedMethods
const methods = Object.assign({}, customMethods)

export default {
  mixins: [mountableMixin],
  props: props,
  replace: false, // necessary for css styles
  methods,

  provide () {
    return {
      '$panoPromise': new Promise((resolve, reject) => {
        this.$panoPromiseDeferred = {resolve, reject}
      })
    }
  },

  computed: {
    finalLat () {
      return this.position &&
        (typeof this.position.lat === 'function') ? this.position.lat() : this.position.lat
    },
    finalLng () {
      return this.position &&
        (typeof this.position.lng === 'function') ? this.position.lng() : this.position.lng
    },
    finalLatLng () {
      return {
        lat: this.finalLat,
        lng: this.finalLng,
      }
    }
  },

  watch: {
    zoom (zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(zoom)
      }
    }
  },

  mounted () {
    return loaded.then(() => {
      // getting the DOM element where to create the map
      const element = this.$refs['vue-street-view-pano']

      // creating the map
      const options = Object.assign({},
        this.options,
        omit(getPropsValues(this), ['options'])
      )

      this.$panoObject = new google.maps.StreetViewPanorama(element, options)

      // binding properties (two and one way)
      bindProps(this, this.$panoObject,
        omit(props, ['position']))

      // manually trigger position
      TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
        // Panos take a while to load
        increment()

        this.$panoObject.addListener('position_changed', () => {
          if (shouldUpdate()) {
            this.$emit('position_changed', this.$panoObject.getPosition())
          }
          decrement()
        })

        this.$watch('finalLatLng', () => {
          increment()
          this.$panoObject.setPosition(this.finalLatLng)
        })
      })

      // binding events
      bindEvents(this, this.$panoObject, events)

      this.$panoPromiseDeferred.resolve(this.$panoObject)

      return this.$panoPromise
    })
    .catch((error) => {
      throw error
    })
  },
}
