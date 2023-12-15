<script setup lang="ts">
import { ref , h } from 'vue';

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 */
const ListComponent = (props, { emit }) => {
  const activeIndex = props['active-index'];

  const items = props.list.map((item, index) => {
    return h('li', {
      style: { color: activeIndex=== index ? 'red' : 'black' },
      onClick: () => {
        emit('toggle', index)
      }
    }, item.name)
  });

  return h('ul',  items)
}

const list = [
  {
    name: 'John',
  },
  {
    name: 'Doe',
  },
  {
    name: 'Smith',
  },
];

const activeIndex = ref(0);

function toggle(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
