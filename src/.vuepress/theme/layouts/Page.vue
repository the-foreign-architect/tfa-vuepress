<template>
  <div class="-mt-16 pt-16 flex-grow">
    <main
      id="custom-content"
      role="main"
      class="page-content container lg:w-2/3 xl:w-1/2 px-6 md:px-8 mx-auto my-8 flex-grow"
    >
      <Content custom/>
    </main>

    <slot name="top"/>
    <slot name="bottom"/>
  </div>
</template>

<script>
import {
  resolvePage,
  normalize,
  outboundRE,
  endingSlashRE,
} from '../mixins/util';

export default {
  computed: {
    lastUpdated() {
      if (this.$page.lastUpdated) {
        return new Date(this.$page.lastUpdated).toLocaleString(this.$lang);
      }
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated;
      }
      return 'Last Updated';
    },

    publishDate() {
      const dateFormat = new Date(this.$frontmatter.date);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      return dateFormat.toLocaleDateString(this.$lang, options);
    },

    prev() {
      const prev = this.$page.frontmatter.prev;
      if (prev === false) {
        return;
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path);
      } else {
        return resolvePrev(this.$page, this.sidebarItems);
      }
    },

    next() {
      const next = this.$page.frontmatter.next;
      if (next === false) {
        return;
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path);
      } else {
        return resolveNext(this.$page, this.sidebarItems);
      }
    },
  },
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...(item.children || []));
    } else {
      res.push(item);
    }
  });
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === 'page' && cur.path === page.path) {
      return res[i + offset];
    }
  }
}
</script>

