<template>
  <div v-if="tiles === '1x2'" class="flex flex-row flex-no-wrap">
    <div v-for="img in imgs" :key="img.src" class="w-auto mr-2">
      <captioned-image :alt="img.alt" :caption="img.caption" :imgFile="img.src"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageTiles',
  props: {
    tiles: {
      type: String,
      default: '1x2',
    },
    imgs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>