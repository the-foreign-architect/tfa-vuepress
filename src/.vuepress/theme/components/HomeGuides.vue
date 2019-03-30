<template>
  <section id="guides" class="md:flex md:flex-wrap md:mb-16">
    <home-title>Architecture City Guides</home-title>
    <div class="md:w-2/3 md:pl-6 text-lg">
      <p
        class="text-center md:text-left mb-8 text-lg"
      >Curated guides with my selection of the most exciting new architecture in each of these cities.</p>
      <div>
        <guide-list :list="$site.pages"/>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
export default {
  components: { HomeTitle },
  props: {
    guides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>