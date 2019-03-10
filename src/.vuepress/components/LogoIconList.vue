<script>
import LogoIconItem from './LogoIconItem';

export default {
  name: 'LogoIconList',
  components: {
    LogoIconItem,
  },
};
</script>

<template>
  <div class="logo-icon__container">
    <LogoIconItem
      v-for="logo in this.$themeConfig.user.socialMedia"
      :name="logo.name"
      :icon="logo.icon"
      :href="logo.href"
      :key="`logo-${logo.name}`"
    />
  </div>
</template>

