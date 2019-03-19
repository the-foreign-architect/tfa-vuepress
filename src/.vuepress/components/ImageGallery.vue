<template>
  <div :id="`gallery-${tag}`" class="mb-8"></div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  mounted() {
    cloudinary
      .galleryWidget({
        container: `#gallery-${this.tag}`,
        cloudName: 'tfa',
        mediaAssets: [{ tag: this.tag }],
        aspectRatio: '7:5',
        borderColor: '#b8c2cc',
        borderWidth: 1,
        carouselLocation: 'bottom',
        navigation: 'always'
      })
      .render();
  },
};
</script>
