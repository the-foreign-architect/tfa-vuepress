<template>
  <div
    v-if="building"
    :id="'building-info-'+building.id"
    class="flex flex-col md:flex-row my-8 w-full border border-grey-dark p-4 building-info text-base"
  >
    <div class="md:w-1/2 pb-4 md:pb-0 md:pr-4">
      <iframe
        :src="
    'https://www.google.com/maps/embed?pb='+building.gmapsEmbed"
        width="100%"
        height="300"
        frameborder="0"
        style="border:0"
      ></iframe>
    </div>
    <div class="md:w-1/2 md:pl-4">
      <header class="mb-4">
        <h5 class="text-xl">{{building.name}}</h5>
        <span v-for="{architect} in building.architectBuildings.nodes" :key="architect.id">
          <a v-if="architect.website" :href="architect.website">{{architect.name}}</a>
          <span v-else>{{architect.name}}</span>
        </span>
      </header>
      <section class="flex flex-col mb-4">
        <span v-if="building.typology">{{building.typology}}</span>
        <span v-if="building.year">{{building.year}}</span>
        <span v-if="building.gfa && building.gfa > 0">{{building.gfa}}sqm</span>
        <span v-if="building.height && building.height > 0">{{building.height}}m</span>
      </section>
      <section v-if="building.links.nodes.length > 0" class="flex flex-col">
        <span v-for="link in building.links.nodes" :key="link.id">
          <a :href="link.url">{{link.title}}</a>
        </span>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>