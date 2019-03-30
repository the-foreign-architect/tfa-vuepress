<template>
  <section id="map" class="md:flex md:flex-wrap md:mb-16">
    <home-title>Latest Map</home-title>
    <div class="md:w-2/3 text-lg">
      <p
        class="text-center md:text-left mb-6"
      >Before, during, and after I go in a trip, I spend a lot of time building maps with selection of buildings I wanna see. Here is the latest one.</p>
      <div>
        <guide-map map="https://www.google.com/maps/d/embed?mid=19Bg9JybbEZ-nxtg_LGtidjBKz3M"/>
      </div>`
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