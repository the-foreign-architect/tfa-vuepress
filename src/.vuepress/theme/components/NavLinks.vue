<template>
  <div
    class="flex items-end lg:items-center flex-col lg:flex-row uppercase tracking-wide lg:justify-center"
    v-if="userLinks.length"
  >
    <!-- user links -->
    <div class="py-1 lg:py-0 lg:px-4" v-for="item in userLinks" :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item"/>
      <NavLink v-else :item="item"/>
    </div>
    <!-- <SearchBox/> -->
    <div>
      <a href="/rss.xml" class="no-underline text-black hover:text-grey-dark">
        <i class="fas fa-rss"></i>
        <span class="lg:hidden">RSS Feed</span>
      </a>
    </div>
  </div>
</template>

<script>
import DropdownLink from './DropdownLink.vue';
import { resolveNavLinkItem } from '../mixins/util';
import NavLink from './NavLink.vue';
import SearchBox from './SearchBox.vue';

export default {
  components: { NavLink, DropdownLink, SearchBox },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },

    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          }),
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },

    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },
  },
};
</script>

<style>
</style>
