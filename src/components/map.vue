<template>
  <div class="vue-map-container">
    <div ref="vue-map" class="vue-map"></div>
    <slot></slot>
  </div>
</template>

<script src="./mapImpl.js">
</script>

<style lang="css">
.vue-map-container {
  position: relative;
}

.vue-map-container .vue-map {
  left: 0; right: 0; top: 0; bottom: 0;
  position: absolute;
}
</style>
