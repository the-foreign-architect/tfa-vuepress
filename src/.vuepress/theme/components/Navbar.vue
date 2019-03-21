<template>
  <nav
    id="navigation"
    class="flex justify-between items-center flex-wrap p-6 border-b border-t border-grey-darkest z-50"
  >
    <div class="flex items-center flex-no-shrink text-black mr-6">
      <router-link
        v-if="!$page.frontmatter.home"
        :to="$localePath"
        class="no-underline text-black font-logo uppercase font-bold tracking-wide text-xl"
      >The Foreign Architect</router-link>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center rounded hover:text-grey-darker" @click="toggleMenu">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <div class="w-full lg:flex lg:items-center lg:w-auto hidden lg:block">
      <div class="text-sm lg:flex-grow">
        <NavLinks/>
      </div>
    </div>
    <div
      v-if="showMenu && windowWidth <= 992"
      class="w-full block lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow lg:hidden">
        <NavLinks/>
      </div>
    </div>
  </nav>
</template>

<script>
import SidebarButton from './SidebarButton.vue';
import SearchBox from './SearchBox.vue';
import NavLinks from './NavLinks.vue';

export default {
  components: { SidebarButton, NavLinks, SearchBox },

  data() {
    return {
      showMenu: false,

      windowWidth: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  watch: {
    windowWidth(newValue) {
      if (newValue > 992) this.showMenu = false;
    },
  },
};
</script>


