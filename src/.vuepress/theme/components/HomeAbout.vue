<template>
  <section id="about">
    <home-title>What's this?</home-title>
    <div class="flex flex-col justify-center md:flex-row">
      <div class="w-1/2 mx-auto mb-6 md:w-1/3">
        <img
          :src="$withBase(profileImage)"
          height="400"
          alt="Daniel da Rocha in Beijing"
          class="rounded"
        >
      </div>
      <div class="md:w-2/3 md:pl-6 text-lg">
        <p
          class="mb-6"
        >Hi! My name is Daniel and I am an architect. I am also crazy about traveling to see and experience architecture around the world.</p>
        <p
          class="mb-6"
        >This site is my contribution to my fellow architecture fans: a collection of guides, maps, and insights about the new architecture happening out there.</p>
        <p class="mb-6">
          Start by checking out the
          <a href="#guides">guides</a> below and the latest posts on the blog. You can also learn more about me
          <a
            href="/about"
          >here.</a>
        </p>
        <p class="mb-6">
          Make sure you
          <a href="/newsletter">sign up</a>
          to receive the latest updates. You can also find me on:
        </p>
        <div class="flex justify-center">
          <a
            href="https://twitter.com/theForeignArch"
            class="shadow-none hover:shadow-none hover:text-grey-dark"
            target="_blank"
            alt="@theForeignArch on Twitter"
          >
            <font-awesome-icon :icon="['fab','twitter-square']" size="2x" class="mr-4"></font-awesome-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/danrocha/"
            class="shadow-none hover:shadow-none hover:text-grey-dark"
            target="_blank"
            alt="Daniel da Rocha on LinkedIn"
          >
            <font-awesome-icon :icon="['fab','linkedin']" size="2x" class="mr-4"></font-awesome-icon>
          </a>
          <a
            href="https://www.pinterest.de/theforeignarchitect/pins/"
            class="shadow-none hover:shadow-none hover:text-grey-dark"
            alt="@theForeignArchitect on Pinterest"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab','pinterest-square']" size="2x" class="mr-4"></font-awesome-icon>
          </a>
          <a
            href="https://www.instagram.com/danroc/"
            class="shadow-none hover:shadow-none hover:text-grey-dark"
            target="_blank"
            alt="@danroc on Instagram"
          >
            <font-awesome-icon :icon="['fab','instagram']" size="2x" class="mr-4"></font-awesome-icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTitle from './HomeTitle.vue';
export default {
  name: 'HomeAbout',
  components: { HomeTitle },
  props: {
    profileImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>