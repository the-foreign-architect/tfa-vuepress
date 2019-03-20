<template>
  <vue-plyr style="max-width: 600px;" class="mx-auto my-8">
    <div :data-plyr-provider="provider" :data-plyr-embed-id="id"></div>
  </vue-plyr>
</template>

<script>
import 'vue-plyr/dist/vue-plyr.css';

export default {
  name: 'VideoPlayer',
  props: {
    provider: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>