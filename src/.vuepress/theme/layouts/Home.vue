<template>
  <div class="w-full bg-white">
    <div class="fixed pin h-full z-0">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="The Foreign Architect"
        class="h-full w-full"
      >
    </div>
    <section id="hero" class="relative h-screen flex items-end w-full">
      <div class="z-20 relative pb-16 w-2/3 px-8 pt-8 container mx-auto bg-white">
        <h1
          class="font-logo mb-2 uppercase font-bold tracking-wide"
        >{{ data.heroText || $title || 'Hello' }}</h1>
        <p
          class="leading-normal font-serif text-lg"
        >{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
        <a
          href="#guides"
          class="uppercase tracking-wide text-sm inline-block bg-red-dark text-white no-underline hover:bg-blue-dark mt-6 p-2 rounded-sm"
        >{{data.actionText}}</a>
      </div>
    </section>
    <!-- <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>-->
    <!--

      <div
        class="relative z-30 w-2/3 mx-auto bg-white pt-16 px-6"
        v-if="data.features && data.features.length"
      >
        <div class v-for="(feature, index) in data.features" :key="index">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>

    -->
    <div class="relative w-full bg-white">
      <div class="w-2/3 mx-auto px-8 pt-16">
        <nav-links/>

        <home-about :profileImage="data.profileImage"/>

        <home-guides :guides="data.guides"/>

        <home-map :map="data.map"/>

        <home-blog/>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from '../components/NavLinks.vue';

export default {
  components: {
    NavLinks,
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style scoped>
</style>

