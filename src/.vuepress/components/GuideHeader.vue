<template>
  <header>
    <div
      v-if="!isIntro"
      class="hero-header-guide mb-8 md:mb-16 flex flex-col md:flex-row md:flex-no-wrap border-b border-grey-light"
    >
      <div class="h-full w-full md:w-1/2" :style="headerHeroStyle"></div>
      <div class="px-6 bg-white md:w-1/2 my-auto">
        <guide-header-content :frontmatter="frontmatter">
          <template #date>
            <slot name="date"/>
          </template>
          <template #title>
            <slot name="title"/>
          </template>
          <template #excerpt>
            <slot name="excerpt"/>
          </template>
        </guide-header-content>
      </div>
    </div>
    <div v-else class="hero-header-guide mb-8 md:mb-16">
      <div class="h-full w-full flex justify-start items-end" :style="headerHeroStyle">
        <div
          class="bg-white container lg:w-2/3 xl:w-1/2 px-6 pt-6 md:px-8 mx-auto -mb-1 border-t border-grey-darkest"
        >
          <guide-header-content :frontmatter="frontmatter">
            <template #date>
              <slot name="date"/>
            </template>
            <template #title>
              <slot name="title"/>
            </template>
            <template #excerpt>
              <slot name="excerpt"/>
            </template>
          </guide-header-content>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GuideHeader',
  props: {
    frontmatter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    coverImageUrl() {
      return (
        'https://res.cloudinary.com/tfa/image/upload/c_scale,g_center,w_2000/' +
        this.frontmatter.coverImage
      );
    },
    isIntro() {
      return (
        (this.frontmatter.series && this.frontmatter.seriesChapter === 0) ||
        !this.frontmatter.series
      );
    },
    headerHeroStyle() {
      return `background: center / cover no-repeat url("${
        this.coverImageUrl
      }");`;
    },
  },
};
</script>

<style scoped>
</style>