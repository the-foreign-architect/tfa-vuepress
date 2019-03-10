<template>
  <div class="flex my-8 w-full border border-grey-dark p-4">
    <div class="w-1/2">MAP</div>
    <div class="w-1/2">Building Name and other info
    </div>
    </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>