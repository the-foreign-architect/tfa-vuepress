<template>
  <section id="blog" class="md:flex md:flex-wrap mb-16">
    <home-title>More from the blog</home-title>
    <div class="md:w-2/3 text-lg">
      <ul class="list-reset blog-item-preview">
        <li v-for="(item, index) in latestBlogPosts" :key="item.title">
          <BlogPostPreview
            :excerpt="item.frontmatter.excerpt"
            :path="item.path"
            :publishDate="item.frontmatter.date"
            :tags="item.frontmatter.tags"
            :title="item.frontmatter.title"
            :coverImage="item.frontmatter.coverImage"
          />
        </li>
      </ul>
      <div class="my-8 flex justify-center">
        <a
          href="/blog/"
          class="bg-black text-white uppercase tracking-wide p-2 shadow rounded-sm text-sm hover:shadow-md hover:bg-grey-darker"
        >See More</a>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
export default {
  components: { HomeTitle },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      numPosts: 3,
    };
  },
  computed: {
    latestBlogPosts() {
      const props = this.$options.propsData;
      if (props) {
        if (props.list && props.list.length > 0) {
          return props.list
            .filter(item => {
              const isBlogPost = item.path.indexOf('/blog/') > -1;
              const isReadyToPublish =
                new Date(item.frontmatter.date) <= new Date();
              const hasTags =
                item.frontmatter.tags &&
                item.frontmatter.tags.includes(this.selectedTag);

              const shouldPublish = this.selectedTag
                ? isBlogPost && isReadyToPublish && hasTags
                : isBlogPost && isReadyToPublish;

              if (shouldPublish) {
                return item;
              }
            })
            .sort(
              (a, b) =>
                new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
            )
            .slice(0, 4);
        }
      }
    },
  },
};
</script>

<style>
@screen lg {
  .blog-item-preview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    grid-column-gap: 1rem;
  }
}
</style>