<template>
  <section id="map">
    <home-title>Latest Map</home-title>
    <p
      class="text-center mb-8"
    >Before, during, and after I go in a trip, I spend a lot of time building maps with selection of buildings I wanna see. Here is the latest one.</p>
    <div class="w-full h-64 bg-green-lightest">{{map}}</div>
  </section>
</template>

<script>
export default {
  props: {
    map: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>