<template>
  <div>
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
    </div>
    <navbar/>
    <main role="main" class="container mx-auto bg-white">
      <div class="px-6 w-full lg:w-2/3 mx-auto pt-8">
        <home-about :profileImage="data.profileImage"/>

        <home-guides :guides="data.guides"/>

        <home-map :map="data.map"/>

        <home-blog :list="$site.pages"/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import HomeBlog from '../components/HomeBlog.vue';
import HomeAbout from '../components/HomeAbout.vue';
import HomeGuides from '../components/HomeGuides.vue';
import HomeMap from '../components/HomeMap.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    HomeMap,
    HomeGuides,
    HomeAbout,
    HomeBlog,
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
    url() {
      return (
        'https://res.cloudinary.com/tfa/image/upload/c_scale,w_2500,q_auto:best/' +
        this.data.heroImage
      );
    },
  },
};
</script>

<style scoped>
</style>

