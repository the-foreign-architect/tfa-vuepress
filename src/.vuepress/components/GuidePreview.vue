<template>
  <div
    class="h-48 lg:h-64 p-4 mb-4 lg:mb-0 rounded-sm flex items-center justify-center flex-col shadow hover:shadow-md cursor-pointer"
    :style="`background: center / cover no-repeat url(${thumbImageUrl});`"
    @click="$router.push(path)"
  >
    <!-- <time class="blog-post__time">{{ formatPublishDate }}</time> -->
    <h2 class="uppercase bg-white p-1 hover:bg-black font-sans">
      <a :href="path" class="font-sans link-clean hover:text-white">{{ city }}</a>
    </h2>
    <!-- <p v-if="excerpt" class="blog-post__excerpt">{{ excerpt }}</p>
    <a class="button blog-post__button" :href="path">Read More ></a>-->
    <!-- <p class="bg-white">{{tags}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'GuidePreview',
  props: {
    publishDate: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: false,
    },
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this._props.publishDate);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      return dateFormat.toLocaleDateString('en-US', options);
    },
    thumbImageUrl() {
      return (
        'https://res.cloudinary.com/tfa/image/upload/c_scale,e_saturation:-50,g_center,w_500/' +
        this.coverImage
      );
    },
  },
};
</script>