<template>
  <div class="flex flex-col">
    <Navbar v-if="shouldShowNavbar"/>
    <Blog v-if="$page.frontmatter.blog"/>
    <Guide v-if="$page.frontmatter.guide"/>
    <Home v-else-if="$page.frontmatter.home"/>
    <Page v-else>
      <slot name="page-top" slot="top"/>
      <slot name="page-bottom" slot="bottom"/>
    </Page>
    <Footer v-if="!$page.frontmatter.home"/>
  </div>
</template>

<script>
import Vue from 'vue';
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
};
</script>
<style>
body,
html {
  @apply text-black font-sans w-full h-full;
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

a.link-clean {
  box-shadow: none;
}
a.link-dark:hover {
  box-shadow: none;
}
hr {
  @apply border-t border-grey-light my-8;
}
</style>

