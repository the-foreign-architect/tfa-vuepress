<template>
  <div>
    <p class="uppercase leading-loose mb-2 text-grey-dark">
      <time :datetime="frontmatter.date">
        <slot name="date"/>
      </time>
    </p>
    <h1 class="font-serif text-4xl mb-2">
      <slot name="title"/>
    </h1>
    <p class="font-serif text-xl leading-normal mb-4">
      <slot name="excerpt"/>
    </p>
    <ul class="list-reset flex justify-start">
      <li
        v-for="tag in frontmatter.tags"
        :key="tag"
        class="uppercase mr-4 text-grey-dark leading-loose text-sm"
      >#{{tag}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GuideHeaderContent',
  props: {
    frontmatter: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>