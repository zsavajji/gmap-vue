# vue-google-maps

## Demo:

[Demo in production](http://en.papayapods.com/?utm_source=GtHub&utm_medium=LnK&utm_campaign=V.JS%20Map%20Cmpnt.#!/search/map?city=Lausanne)

[Showcase with a lot of features](http://guillaumeleclerc.github.io/vue-google-maps-example/)

## Presentation

If you want to write google map this way :

```html
<map
  :center="{lat:10, lng:10}"
  :map-type-id="terrain"
  :zoom="7"
></map>
```

Or use the power of Vue.js within a google map like this:
```html
<template>
  <map
    :center="center"
    :zoom="7"
  >
    <marker
      v-for="m in markers"
      :position.sync="m.position"
      :clickable="true"
      :draggable="true"
      @g-click="center=m.position"
    ></marker>
  </map>
</template>

<script>
  import {load, Map, Marker} from 'vue-google-maps'

  load('YOUR_API_TOKEN','OPTIONAL VERSION NUMBER')

  export default {
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>
```

## Vue-2 port of vue-google-maps

If you have used vue-google-maps with Vue 1.x before, refer to [Upgrading](UPGRADING.md).
API documentation is still pending. By and large, unless you are using two-way binding,
you should be able to re-use the code you wrote for Vue 1.x.


## Testing

There is a non-comprehensive test for the DeferredReady mixin. More tests
should be written to help contributors.

Improvements to the tests are welcome :)

## Example Project

Refer to the [examples](examples).

## Installation

### With npm (Recommended)

```
npm install vue-google-maps
```

You can append `--save` or `--save-dev` to add it to your dependency (if yor project also uses npm)

### Manually

Just download the `index.js` file on the root directory of this repository

### Basic usage

#### Reference `vue-google-maps` into your project

If you are using a cool bundler (recommended) you can just do :

```javascript
import {load, Map, Marker} from 'vue-google-maps'
```

Or if you prefer the older ES5 syntax:

```javascript
const VueGoogleMap = require('vue-google-maps')
```

#### Standalone / CDN

If you are not using any bundler, include `vue-google-maps/dist/vue-google-maps.js`
instead.
The library will be available in a global object called `VueGoogleMap`.
However you will need to include Vue and Lodash beforehand:

```html
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.js"></script>
<script src="dist/vue-google-maps.js"></script>
</head>
<body>

  <div id="root">
    <google-map style="width: 100%; height: 100%; position: absolute; left:0; top:0"
        :center="{lat: 1.38, lng: 103.8}"
        :zoom="12"
    >

    </google-map>
  </div>

  <script>
  VueGoogleMap.load({
      'key': 'YOUR_API_KEY',
  })
  Vue.component('google-map', VueGoogleMap.Map);
  new Vue({
      el: '#root',
  });

  </script>

</body>
```

#### Set your api key

To enable any `vue-google-maps` components you need to set your api token:

```javascript
load({
  key: 'YOUR_API_TOKEN',
  v: '3.26',                // Google Maps API version
  // libraries: 'places',   // If you want to use places input
})
// OR (depending on how you refereced it)
VueGoogleMap.load({ ... })
```

The parameters are passed in the query string to the Google Maps API, e.g. to set the [version](https://developers.google.com/maps/documentation/javascript/versions#version-rollover-and-version-types),
[libraries](https://developers.google.com/maps/documentation/javascript/libraries),
or for [localisation](https://developers.google.com/maps/documentation/javascript/basics).

## Full documentation

### Note on events

__All events are prefixed with `g-`. Example : `g-click` so it does not interfere with DOM events.__

__Documentation is up to date__: take a look at the wiki
