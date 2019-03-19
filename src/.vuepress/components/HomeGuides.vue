<template>
  <section id="guides">
    <home-title>Architecture City Guides</home-title>
    <p
      class="text-center mb-8"
    >Curated guides with my selection of the most exciting new architecture in each on of these cities.</p>
    <guide-list :list="$site.pages"/>
  </section>
</template>

<script>
export default {
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