<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 20.7305861, lng: -103.3903628 }
</script>

<template>
  <GoogleMap
  api-key="AIzaSyAU5X4IVScQeISwKYLNJBaxlCUF3JZs40o"
  style="width: 100%; height: 400px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>