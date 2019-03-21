<template>
  <section id="map">
    <home-title>Latest Map</home-title>
    <p
      class="text-center mb-8"
    >Before, during, and after I go in a trip, I spend a lot of time building maps with selection of buildings I wanna see. Here is the latest one.</p>
    <div class="md:-mx-16">
      <guide-map map="https://www.google.com/maps/d/embed?mid=19Bg9JybbEZ-nxtg_LGtidjBKz3M"/>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
export default {
  components: { HomeTitle },
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