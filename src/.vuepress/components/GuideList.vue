<template>
  <div class="container mx-auto px-6">
    <div v-if="!$page.frontmatter.home">
      <div class="my-8">
        <h1 class="font-serif font-normal">Guides</h1>
      </div>

      <div v-if="selectedTag" class="filtered-heading">
        <h2>Filtered by {{ selectedTag }} tag</h2>
        <button type="button" @click="selectedTag = ''" class="btn clear-filter-btn">Clear filter</button>
      </div>
    </div>
    <ul class="list-reset flex flex-wrap my-8 -mx-4">
      <li v-for="(item, index) in filteredList" class="p-4 w-full md:w-1/2 lg:w-1/3">
        <GuidePreview
          v-show="index <= displayRange.end"
          :excerpt="item.frontmatter.excerpt"
          :path="item.path"
          :publishDate="item.frontmatter.date"
          :tags="item.frontmatter.tags"
          :title="item.frontmatter.title"
          :city="item.frontmatter.city"
          :coverImage="item.frontmatter.coverImage"
          @updateSelectedTag="updateSelectedTag"
        />
      </li>
    </ul>

    <div
      v-if="displayRange.end <= filteredList.length && !$page.frontmatter.home"
      class="pagination"
    >
      <button @click="loadMore" class="button--load-more" type="button">Load More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      displayRange: {
        end: 6,
      },
      selectedTag: '',
    };
  },
  computed: {
    filteredList() {
      const props = this.$options.propsData;
      if (props) {
        if (props.list && props.list.length > 0) {
          return props.list
            .filter(item => {
              const isGuide = item.path.indexOf('/guides/') > -1;
              const isReadyToPublish =
                new Date(item.frontmatter.date) <= new Date();
              const hasTags =
                item.frontmatter.tags &&
                item.frontmatter.tags.includes(this.selectedTag);
              const isSeriesFirst =
                (item.frontmatter.series &&
                  item.frontmatter.series_chapter === 0) ||
                !item.frontmatter.series;
              const shouldPublish = this.selectedTag
                ? isGuide && isReadyToPublish && isSeriesFirst && hasTags
                : isGuide && isReadyToPublish && isSeriesFirst;

              if (shouldPublish) {
                return item;
              }
            })
            .sort(
              (a, b) =>
                new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
            );
        }
      }
    },
  },
  methods: {
    loadMore() {
      this.displayRange.end += 5;
    },
    updateSelectedTag(tag) {
      this.selectedTag = tag;
    },
  },
};
</script>



