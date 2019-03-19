<template>
  <section id="about">
    <home-title>What's this?</home-title>
    <div class="flex flex-col justify-center md:flex-row">
      <div class="w-1/2 mx-auto mb-6 md:w-1/3">
        <img
          :src="$withBase(profileImage)"
          height="400"
          alt="Daniel da Rocha in Beijing"
          class="rounded"
        >
      </div>
      <div class="md:w-2/3 md:pl-6 text-lg">
        <p
          class="mb-6"
        >Hi! My name is Daniel and I am an architect. I am also crazy about traveling to see and experience architecture around the world.</p>
        <p
          class="mb-6"
        >This site is my contribution to my fellow architecture fans: a collection of guides, maps, and insights about the new architecture happening out there.</p>
        <p
          class="mb-6"
        >Start by checking out the guides below and the latest posts on the blog. You can also learn more about me here.</p>
        <p
          class="mb-6"
        >Make sure you sign up to receive the latest updates. You can also find me on:</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeAbout',
  props: {
    profileImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>