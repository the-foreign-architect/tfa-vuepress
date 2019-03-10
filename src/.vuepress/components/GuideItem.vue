<script>
export default {
  name: 'GuideItem',
  props: {
    description: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="guide-item">
    <img class="guide-item__logo" :src="imgSrc" :alt="imgAlt">
    <div>
      <a class="guide-item__title" :href="href">{{ title }}</a>
      <p class="guide-item__description">{{ description }}</p>
    </div>
  </div>
</template>

