<template>
  <div class="flex w-full justify-start">
    <social-sharing
      :url="url"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags"
      twitter-user="theforeignarch"
      :media="pinterestMediaUrl"
      network-tag="a"
      inline-template
    >
      <div>
        <network class="mr-4 cursor-pointer" network="facebook">
          <i class="fab fa-facebook"></i> Facebook
        </network>
        <network class="mr-4 cursor-pointer" network="linkedin">
          <i class="fab fa-linkedin"></i> LinkedIn
        </network>
        <network class="mr-4 cursor-pointer" network="pinterest">
          <i class="fab fa-pinterest"></i> Pinterest
        </network>
        <network class="mr-4 cursor-pointer" network="reddit">
          <i class="fab fa-reddit"></i> Reddit
        </network>
        <network class="mr-4 cursor-pointer" network="twitter">
          <i class="fab fa-twitter"></i> Twitter
        </network>
        <network class="mr-4 cursor-pointer" network="whatsapp">
          <i class="fab fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  name: 'SocialSharingContainer',
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    quote: {
      type: String,
      default: null,
    },
    hashtags: {
      type: String,
      default: 'architecture',
    },
    media: {
      type: String,
      default: null,
    },
  },
  computed: {
    pinterestMediaUrl() {
      if (this.media)
        return (
          'https://res.cloudinary.com/tfa/image/upload/c_scale,h_800,q_auto:best/' +
          this.media
        );
      return null;
    },
  },
};
</script>

<style scoped>
</style>