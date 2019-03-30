<template>
  <section class="w-full bg-grey-lightest py-8 mt-8">
    <div class="container lg:w-2/3 xl:w-1/2 px-6 md:px-8 mx-auto">
      <h3 class="mb-4">Share</h3>

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
            <i class="fab fa-facebook mr-2"></i>Facebook
          </network>
          <network class="mr-4 cursor-pointer" network="linkedin">
            <i class="fab fa-linkedin mr-2"></i>LinkedIn
          </network>
          <network class="mr-4 cursor-pointer" network="pinterest">
            <i class="fab fa-pinterest mr-2"></i>Pinterest
          </network>
          <network class="mr-4 cursor-pointer" network="reddit">
            <i class="fab fa-reddit mr-2"></i>Reddit
          </network>
          <network class="mr-4 cursor-pointer" network="twitter">
            <i class="fab fa-twitter mr-2"></i>Twitter
          </network>
          <network class="mr-4 cursor-pointer" network="whatsapp">
            <i class="fab fa-whatsapp mr-2"></i>Whatsapp
          </network>
        </div>
      </social-sharing>
    </div>
  </section>
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