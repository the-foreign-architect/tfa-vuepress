<template>
  <div class="-mt-16 pt-16">
    <header class="mb-8">
      <!-- <div class="px-8 z-10 bg-white py-16 w-2/3 mx-auto">
        <p class="uppercase leading-loose">
          <time :datetime="$frontmatter.date">{{ publishDate }}</time>
        </p>
        <h1 class="blog__title">{{ $page.title }}</h1>
      </div>-->
      <div
        class="w-screen h-screen pin-t pin-l bg-cover bg-fixed flex items-center"
        :style="'background-image: url('+ $frontmatter.coverImage + ');'"
      >
        <div class="bg-white w-2/3 mx-auto p-8">
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
      </div>
    </header>
    <main id="guide" role="main" class="w-2/3 mx-auto px-8">
      <Content custom/>
    </main>

    <section class="share">
      <h2>Share</h2>
      <a
        class="share__button"
        :href="`https://twitter.com/intent/tweet?text=${urlPostTitle} by @bencodezen ${$themeConfig.domain}${$page.path}`"
        target="_blank"
      >
        <i class="fab fa-twitter"></i> Tweet
      </a>
    </section>

    <div class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a
          href="https://github.com/bencodezen/bencodezen/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ editLinkText }}
          <OutboundLink/>
        </a>
      </div>
      <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}:</span>
        <time class="time" :datetime="$page.lastUpdated">{{ lastUpdated }}</time>
      </div>
    </div>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">←
          <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
        </span>
        
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>→
        </span>
      </p>
    </div>

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
  name: 'Guide',

  props: ['sidebarItems'],

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

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo,
      } = this.$site.themeConfig;

      let path = normalize(this.$page.path);
      if (endingSlashRE.test(path)) {
        path += 'README.md';
      } else {
        path += '.md';
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path);
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
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

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, '') +
          `/${docsBranch}` +
          (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return (
        base.replace(endingSlashRE, '') +
        `/edit/${docsBranch}` +
        (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
        path
      );
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
<style>
#guide {
  @apply text-lg leading-normal;
}
#guide h2 {
  @apply mt-16 mb-8;
}
#guide p {
  @apply my-4 text-lg leading-normal;
}
#guide ul {
  @apply list-reset;
}
#guide p + img + em {
  @apply text-center;
}
#guide img + em {
  @apply block text-grey-dark text-sm;
}
</style>


