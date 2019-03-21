<template>
  <section class="h-full border border-grey-lighter flex justify-between flex-col pb-4">
    <div>
      <div
        class="h-64 p-2 flex items-start justify-start shadow hover:shadow-md cursor-pointer mb-2"
        :style="headerHeroStyle"
        @click="$router.push(path)"
      >
        <time class="uppercase leading-loose text-white text-sm">{{ formatPublishDate }}</time>
      </div>
      <div class="px-4 mb-4">
        <h5 class="text-lg font-serif mb-2 leading-normal">
          <a :href="path" class="blog-post__link">{{ title }}</a>
        </h5>
        <p v-if="excerpt">
          <span class="text-sm">{{ excerpt }}</span>
        </p>
      </div>
    </div>
    <div class="text-right pr-4 pb-1">
      <a class="text-sm font-bold" :href="path">Read More &rarr;</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPostPreview',
  props: {
    publishDate: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
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
    headerHeroStyle() {
      return `background-image: linear-gradient(to bottom, rgba(0, 0, 0, .25),transparent,transparent, transparent), url(${
        this.thumbImageUrl
      });
          background-size: cover';
          background-repeat: no-repeat;
          background-position: center top;`;
    },
  },
};
</script>


