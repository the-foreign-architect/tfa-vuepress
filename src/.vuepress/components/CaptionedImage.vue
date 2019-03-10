<template>
  <figure class="text-center">
    <img :src="url" :alt="alt">
    <figcaption class="text-sm text-grey-dark italic">{{ caption }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>