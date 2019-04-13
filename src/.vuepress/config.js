require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  title: 'The Foreign Architect',
  dest: './public',
  themeConfig: {
    domain: 'https://theforeignarchitect.com',
    logo: '/TFA_monogram.png',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'City Guides', link: '/guides/index.html' },
      { text: 'Blog', link: '/blog/index.html' },
      /* {
        text: 'About',
        items: [
          { text: 'Me', link: '/about/index.html' },
          { text: 'Uses', link: '/uses/index.html' },
          { text: 'Media Log', link: '/about/media-log/index.html' }
        ]
      }, */
      {
        text: 'About',
        link: '/about/',
      },
      { text: 'Newsletter', link: '/newsletter/index.html' },
    ],
    user: {
      socialMedia: [
        {
          name: 'Twitter',
          href: 'https://twitter.com/theforeignarch',
          icon: 'twitter',
        },
      ],
    },
  },
  markdown: {
    anchor: {
      permalinkSymbol: '',
    },
    toc: {
      includeLevel: [2],
    },
  },
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
  plugins: [
    [
      'vuepress-plugin-rss',
      {
        base_url: '/',
        site_url: 'https://theforeignarchitect.com',
        filter: frontmatter => frontmatter.date <= new Date(),
        count: 20,
      },
    ],
    'vuepress-plugin-janitor',
  ],
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['script', { async: true, src: 'https://product-gallery.cloudinary.com/all.js' }],
    [
      'script',
      {
        async: true,
        src: 'https://use.fontawesome.com/releases/v5.8.1/js/brands.js',
        integrity: 'sha384-rUOIFHM3HXni/WG5pzDhA1e2Js5nn4bWudTYujHbbI9ztBIxK54CL4ZNZWwcBQeD',
        crossorigin: 'anonymous',
      },
    ],
    [
      'script',
      {
        async: true,
        src: 'https://use.fontawesome.com/releases/v5.8.1/js/fontawesome.js',
        integrity: 'sha384-EMmnH+Njn8umuoSMZ3Ae3bC9hDknHKOWL2e9WJD/cN6XLeAN7tr5ZQ0Hx5HDHtkS',
        crossorigin: 'anonymous',
      },
    ],
    [
      'script', {},
      `(function(f, a, t, h, o, m){
        a[h]=a[h]||function(){
          (a[h].q=a[h].q||[]).push(arguments)
        };
        o=f.createElement('script'),
        m=f.getElementsByTagName('script')[0];
        o.async=1; o.src=t; o.id='fathom-script';
        m.parentNode.insertBefore(o,m)
      })(document, window, '//stats.danroc.dev/tracker.js', 'fathom');
      fathom('set', 'siteId', 'XSOKB');
      fathom('trackPageview');`
    ]
  ],
  configureWebpack: config => {
    return {
      plugins: [new webpack.EnvironmentPlugin({ ...process.env })],
    };
  },
};