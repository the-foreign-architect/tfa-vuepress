<template>
    <div class="bg-grey-lighter pt-2 pb-4 px-4 mb-8 flex flex-row flex-no-wrap justify-between items-start">
      <div class="w-1/2 text-left content-start mr-8 flex flex-row">
        <span class="mr-2">&larr;</span><span class="font-bold"><a :href="prevUrl" :alt="prevText">{{prevText}}</a></span>
      </div>
      <div class="w-1/2 text-right content-start ml-8 flex flex-row"><span class="font-bold"><a :href="nextUrl" :alt="nextText">{{nextText}}</a></span><span class="ml-2">&rarr;</span></div>
    </div>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    prevText: {
      type: String,
      default: '',
    },
    prevUrl: {
      type: String,
      default: '',
    },
    nextText: {
      type: String,
      default: '',
    },
    nextUrl: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
</style>