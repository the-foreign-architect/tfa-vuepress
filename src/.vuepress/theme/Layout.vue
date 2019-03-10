<template>
  <div @touchstart="onTouchStart" @touchend="onTouchEnd">
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <div class="fixed z-10 pin-t pin-b hidden w-screen h-screen" @click="toggleSidebar(false)"></div>

    <Sidebar v-if="shouldShowSidebar" :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>

    <!--  <div class="pt-48" v-if="$page.frontmatter.layout">
      <component :is="$page.frontmatter.layout"/>
    </div>-->
    <Blog v-if="$page.frontmatter.blog" :sidebar-items="sidebarItems"/>
    <Guide v-if="$page.frontmatter.guide" :sidebar-items="sidebarItems"/>

    <Home v-else-if="$page.frontmatter.home"/>

    <Page v-else :sidebar-items="sidebarItems">
      <slot name="page-top" slot="top"/>
      <slot name="page-bottom" slot="bottom"/>
    </Page>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';
import nprogress from 'nprogress';
import Home from './layouts/Home.vue';
import Navbar from './components/Navbar.vue';
import Page from './layouts/Page.vue';
import Sidebar from './components/Sidebar.vue';
import Blog from './layouts/Blog.vue';
import Guide from './layouts/Guide.vue';
import Footer from './components/Footer.vue';
import { resolveSidebarItems } from './mixins/util';
import '@fortawesome/fontawesome-pro/css/all.min.css';

export default {
  components: { Blog, Guide, Home, Page, Sidebar, Navbar, Footer },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);

    // configure progress bar
    nprogress.configure({ showSpinner: false });

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });

    this.$router.afterEach(() => {
      nprogress.done();
      this.isSidebarOpen = false;
    });

    this.$on('sw-updated', this.onSWUpdated);
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    onSWUpdated(e) {
      this.swUpdateEvent = e;
    },
  },
};
</script>
<style>
body,
html {
  @apply text-black font-sans;
}
a {
  @apply no-underline;
  @apply text-black;
  box-shadow: inset 0 -0.5em 0 #dae1e7;
  transition: box-shadow 0.2s ease-in-out;
}
a:hover {
  box-shadow: inset 0 -0.1em 0 #dae1e7;
}
a.link-dark {
  @apply text-white;
  box-shadow: inset 0 -0.5em 0 #3d4852;
}
a.link-dark:hover {
  box-shadow: inset 0 -0.1em 0 #3d4852;
}
</style>

