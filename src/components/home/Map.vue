<template>
  <div class="map">
    <GmapMap
      @click="clickMap"
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
import { interval } from 'rxjs'
import styles from './mapstyles'
import { getGeoLocation } from '@/utils/geolocation'
import { dispatch } from '@/state/store'

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
      sessionLength: 0,
    }
  },
  methods: {
    clickMap(event) {
      const { latLng } = event
      const { lat, lng } = latLng
      console.log(`map clicked @ (${lat()}, ${lng()})`)
    },
    printSessionLength() {
      console.debug(`map session length: ${this.sessionLength} minute`)
    },
  },
  mounted() {
    this.$subscribeTo(interval(60000), () => {
      this.sessionLength += 1
      this.printSessionLength()
    })

    this.$subscribeTo(interval(10000), () => {
      dispatch({ type: 'BUMPMAP_TEST', sessionLength: this.sessionLength })
    })

    getGeoLocation().then(
      ({ lat, lng }) => {
        this.lat = lat || this.lat
        this.lng = lng || this.lng
      },
      (error) => {
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

