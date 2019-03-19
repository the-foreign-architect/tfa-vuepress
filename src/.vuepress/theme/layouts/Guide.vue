<template>
  <div class="-mt-16 pt-16 flex-grow">
    <header class="hero-header mb-8 md:mb-16 flex flex-col md:flex-row border-b border-grey-light">
      <div
        class="w-full md:w-1/2 overflow-hidden flex items-center justify-center flex-row flex-no-wrap relative"
      >
        <img :src="coverImageUrl" class="hero-img min-h-full max-h-full flex-shrink">
      </div>
      <div class="px-6 bg-white md:w-1/2 my-auto">
        <p class="uppercase leading-loose mb-2 text-grey-dark">
          <time :datetime="$frontmatter.date">{{ publishDate }}</time>
        </p>
        <h1 class="font-serif text-4xl mb-2">{{ $page.title }}</h1>
        <p class="font-serif text-xl leading-normal mb-4">{{$frontmatter.excerpt}}</p>
        <ul class="list-reset flex justify-start">
          <li
            v-for="tag in $frontmatter.tags"
            :key="tag"
            class="uppercase mr-4 text-grey-dark leading-loose text-sm"
          >#{{tag}}</li>
        </ul>
      </div>
    </header>
    <main
      id="custom-content"
      role="main"
      class="guide-content container md:w-2/3 mx-auto px-6 md:px-8 flex-grow"
    >
      <Content custom/>
    </main>

    <section class="w-full bg-grey-lightest py-8 mt-8">
      <div class="container md:w-2/3 mx-auto px-6 md:px-8 flex-grow">
        <h3 class="mb-4">Share</h3>
        <social-sharing-container
          :url="$themeConfig.domain+$page.path"
          :title="$page.title"
          :description="$page.excerpt"
          :hashtags="'architecture,'+$frontmatter.sharingHashtags"
          twitter-user="theforeignarch"
          :media="$frontmatter.pinterestMedia"
        />
      </div>
    </section>

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
    coverImageUrl() {
      return (
        'https://res.cloudinary.com/tfa/image/upload/c_scale,g_center,w_2000/' +
        this.$frontmatter.coverImage
      );
    },
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
<style>
</style>


