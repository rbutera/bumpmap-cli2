<template>
  <div class="map">
    <GmapMap
      :center="{lat: this.lat, lng: this.lng}"
      :zoom="zoom"
      map-type-id="roadmap"
      class="google-map"
      style="width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  padding-top: 50px;"
      v-bind:options="mapStyle"
    ></GmapMap>
  </div>
</template>


<script>
import { GMapMap } from 'vue2-google-maps'
import styles from './mapstyles'
import { getGeoLocation } from '@/utils/geolocation'

export default {
  name: 'GMap',
  components: {
    GMapMap,
  },
  data() {
    return {
      lat: 53,
      lng: -2,
      zoom: 3,
      mapStyle: {
        styles,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      },
    }
  },
  mounted() {
    getGeoLocation().then(
      ({ lat, lng }) => {
        this.lat = lat || this.lat
        this.lng = lng || this.lng
      },
      error => {
        console.error('geolocation get error', error)
      },
    )
  },
}
</script>

<style lang="scss">
.vue-map > div:first-child {
  background-color: rgba(0, 0, 0, 1) !important;
}
</style>

