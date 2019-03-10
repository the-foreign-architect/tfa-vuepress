<template>
  <div class="cursor-pointer" :class="{ open }">
    <a class="block hover:border-transparent" @click="toggle">
      <span class="title">{{ item.text }}</span>
      <span class="align-middle -mt-1 ml-1" :class="open ? 'down' : 'right'"></span>
    </a>

    <DropdownTransition>
      <ul id="nav-dropdown" class v-show="open">
        <li class :key="subItem.link || index" v-for="(subItem, index) in item.items">
          <h4 class="mt-2 border-top pt-2 px-2" v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul class="p-0 list-reset" v-if="subItem.type === 'links'">
            <li class="text-sm" :key="childSubItem.link" v-for="childSubItem in subItem.items">
              <NavLink class="border-b-0 mb-0 px-2" :item="childSubItem"/>
            </li>
          </ul>

          <NavLink v-else :item="subItem"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from './NavLink.vue';
import DropdownTransition from './DropdownTransition.vue';

export default {
  components: { NavLink, DropdownTransition },

  data() {
    return {
      open: false,
    };
  },

  props: {
    item: {
      required: true,
    },
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>


