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
          <font-awesome-icon :icon="['fab','facebook']" class="mr-2"></font-awesome-icon>Facebook
        </network>
        <network class="mr-4 cursor-pointer" network="linkedin">
          <font-awesome-icon :icon="['fab','linkedin']" class="mr-2"></font-awesome-icon>LinkedIn
        </network>
        <network class="mr-4 cursor-pointer" network="pinterest">
          <font-awesome-icon :icon="['fab','pinterest']" class="mr-2"></font-awesome-icon>Pinterest
        </network>
        <network class="mr-4 cursor-pointer" network="reddit">
          <font-awesome-icon :icon="['fab','reddit']" class="mr-2"></font-awesome-icon>Reddit
        </network>
        <network class="mr-4 cursor-pointer" network="twitter">
          <font-awesome-icon :icon="['fab','twitter']" class="mr-2"></font-awesome-icon>Twitter
        </network>
        <network class="mr-4 cursor-pointer" network="whatsapp">
          <font-awesome-icon :icon="['fab','whatsapp']" class="mr-2"></font-awesome-icon>Whatsapp
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