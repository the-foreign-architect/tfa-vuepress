<template>
  <section id="guides">
    <home-title>Contemporary Architecture City Guides</home-title>
    <p
      class="text-center mb-8"
    >Curated guides with my selection of the most exciting new architecture in each on of these cities.</p>
    <div class="flex flex-wrap">
      <div v-for="guide in guides" :key="guide.city" class="w-1/3 m-6">{{guide.city}}</div>
    </div>
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