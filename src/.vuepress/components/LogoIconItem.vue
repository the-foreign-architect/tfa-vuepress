<script>
import LogoNotist from './LogoNotist';

export default {
  name: 'LogoGeneric',
  components: { LogoNotist },
  props: {
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <a v-if="name !== 'Notist'" class="logo-generic" :href="href">
    <i v-if="icon" :class="`fab fa-${icon} logo-generic__icon`"></i>
    <p class="logo-generic__name">{{ name }}</p>
  </a>
  <a v-else class="logo-generic" :href="href">
    <LogoNotist/>
  </a>
</template>


