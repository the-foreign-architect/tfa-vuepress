<template>
  <div class="-mt-16 pt-16 flex-grow">
    <guide-header :frontmatter="$frontmatter">
      <template #date>{{publishDate}}</template>
      <template #title>{{$page.title}}</template>
      <template #excerpt>{{$frontmatter.excerpt}}</template>
    </guide-header>
    <main
      id="custom-content"
      role="main"
      class="guide-content container lg:w-2/3 xl:w-1/2 px-6 md:px-8 mx-auto flex-grow"
    >
      <Content custom/>
    </main>

    <social-sharing-container
      :url="$themeConfig.domain+$page.path"
      :title="$page.title"
      :description="$page.excerpt"
      :hashtags="'architecture,'+$frontmatter.sharingHashtags"
      twitter-user="theforeignarch"
      :media="$frontmatter.pinterestMedia"
    />

    <slot name="bottom"/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

import {
  resolvePage,
  normalize,
  outboundRE,
  endingSlashRE,
} from '../mixins/util';

export default {
  name: 'Guide',
  components: { Footer },

  computed: {
    lastUpdated() {
      if (this.$page.lastUpdated) {
        const dateFormat = new Date(this.$page.lastUpdated);

        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        return `${dateFormat.toLocaleDateString(
          this.$lang,
          options
        )}, ${dateFormat.toLocaleTimeString(this.$lang)}`;
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

    urlPostTitle() {
      return encodeURIComponent(this.$page.title);
    },
  },

  mounted() {
    let tweets = document.querySelectorAll('.twitter-tweet');

    if (tweets && tweets.length > 0) {
      tweets.forEach(tweet => {
        let id = tweet.dataset.twitterId;
        twttr.widgets.createTweet(id, tweet);
        tweet.setAttribute('style', 'border: 0; padding: 0; margin-right: 0;');
        tweet.children[0].setAttribute('style', 'display: none;');
      });
    }
  },
};

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


