<template>
  <svg
    viewBox="0 0 11 10"
    preserveAspectRatio="none"
    class="base-star"
  >
    <path
      d="M5.5 0l1.235 3.8h3.996L7.498 6.15l1.235 3.8L5.5 7.6 2.267 9.95l1.235-3.8L.269 3.8h3.996L5.5 0z"
      :fill="isFilled ? '#3a7a7d' : '#d2d6d3'"
      class="base-star__inner"
    />
  </svg>
</template>

<script>
export default {
  name: 'BaseStart',
  props: {
    isFilled: {

    },
  },
};
</script>

<style lang="scss" src="./BaseStar.scss" />
