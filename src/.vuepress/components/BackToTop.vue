<template>
  <p>
    <span class="text-sm mr-2 font-bold">&uarr;</span>
    <a :href="anchor">back to top</a>
  </p>
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      default: '#',
    },
  },
};
</script>

<style scoped>
</style>