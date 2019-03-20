<template>
  <div
    class="h-screen w-full"
    :style="'background: url('+$withBase(data.heroImage)+') fixed center/cover;'"
  >
    <div id="hero" class="p-6 md:p-8 h-full w-full flex items-center">
      <div>
        <h1
          class="bg-white font-logo p-1 mb-2 md:mb-4 uppercase font-bold tracking-wide"
        >{{ data.heroText || $title || 'Hello' }}</h1>
        <p
          class="bg-white leading-normal font-serif text-lg p-1 mb-2 md:mb-4"
        >{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
        <a
          href="#guides"
          class="uppercase tracking-wide text-sm inline-block bg-red-dark text-white p-2 rounded-sm shadow-none hover:bg-red-darker hover:shadow-none"
        >{{data.actionText}}</a>
      </div>
    </div>

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
    <navbar/>
    <main role="main" class="container mx-auto bg-white">
      <div class="px-6 w-full lg:w-2/3 mx-auto pt-8">
        <home-about :profileImage="data.profileImage"/>

        <home-guides :guides="data.guides"/>

        <home-map :map="data.map"/>

        <home-blog/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
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

