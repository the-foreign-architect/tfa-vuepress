<template>
  <section id="about" class="md:flex md:flex-wrap md:mb-16">
    <home-title>What's this?</home-title>
    <div class="lg:flex md:w-2/3">
      <div class="mx-auto mb-6 lg:mx-0 lg:w-1/3">
        <img :src="profileImage" height="400" alt="Daniel da Rocha in Beijing" class="rounded">
      </div>
      <div class="lg:w-2/3 lg:pl-6 text-lg">
        <p
          class="mb-6"
        >Hi! My name is Daniel and I am an architect. I am also love to travel and see and experience architecture around the world.</p>
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
            class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
            target="_blank"
            alt="@theForeignArch on Twitter"
            aria-label="Open my profile on Twitter"
            rel="noopener"
          >
            <i class="fab fa-twitter-square fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/danrocha/"
            class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
            target="_blank"
            alt="Daniel da Rocha on LinkedIn"
            aria-label="Open my profile on Linkedin"
            rel="noopener"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.pinterest.de/theforeignarchitect/pins/"
            class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
            alt="@theForeignArchitect on Pinterest"
            target="_blank"
            aria-label="Open my profile on Pinterest"
            rel="noopener"
          >
            <i class="fab fa-pinterest-square fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/danroc/"
            class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
            target="_blank"
            alt="@danroc on Instagram"
            aria-label="Open my profile on Instagram"
            rel="noopener"
          >
            <i class="fab fa-instagram fa-2x"></i>
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