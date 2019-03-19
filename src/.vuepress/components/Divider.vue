<template>
  <div class="wrapper">
    <div class="divider div-transparent div-stopper"></div>
  </div>
</template>

<script>
export default {
  name: 'Divider',
};
</script>

<style scoped>
.wrapper {
  padding-bottom: 4rem;
}

.divider {
  position: relative;
  margin-top: 4rem;
  height: 1px;
}

.div-transparent:before {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}

.div-stopper:after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -6px;
  left: calc(50% - 7px);
  width: 14px;
  height: 12px;
  background-color: white;
  border-left: 1px solid rgb(48, 49, 51);
  border-right: 1px solid rgb(48, 49, 51);
}
</style>