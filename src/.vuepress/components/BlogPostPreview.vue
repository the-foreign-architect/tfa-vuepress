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
      required: false,
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
  },
};
</script>

<template>
  <section class="blog-post">
    <time class="blog-post__time">{{ formatPublishDate }}</time>
    <h2 class="blog-post__title">
      <a :href="path" class="blog-post__link">{{ title }}</a>
    </h2>
    <p v-if="excerpt" class="blog-post__excerpt">{{ excerpt }}</p>
    <a class="button blog-post__button" :href="path">Read More ></a>
  </section>
</template>


