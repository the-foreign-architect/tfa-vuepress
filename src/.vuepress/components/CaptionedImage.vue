<template>
  <figure class="text-center my-8">
    <img :src="url" :alt="alt">
    <figcaption class="text-sm text-grey-dark italic">{{ caption }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    imgFile: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
  },
  computed: {
    url() {
      return (
        'https://res.cloudinary.com/tfa/image/upload/c_scale,h_800,q_auto:best/' +
        this.imgFile
      );
    },
  },
};
</script>