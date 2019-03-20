<template>
  <div class="my-8 flex justify-center items-center">
    <iframe
      id="`player-${id}`"
      type="text/html"
      width="800"
      height="450"
      :src="src"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
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
  computed: {
    src() {
      if (this.provider === 'youtube') {
        return `https://www.youtube.com/embed/${
          this.id
        }?origin=https://theforeignarchitect.com`;
      } else if (this.provider === 'vimeo') {
        return `https://player.vimeo.com/video/${this.id}?color=ffffff`;
      }
    },
  },
};
</script>
