<template>
  <div class="base-reviews">
    <ul class="base-reviews__rating">
      <base-star
        v-for="index in finalMax"
        class="base-reviews__rating-star"
        :key="`start-${index}`"
        :is-filled="isFilled(index, finalRating)"
      />
    </ul>

    <p class="base-reviews__counter">
      {{ countText }}
    </p>
  </div>
</template>

<script>
import BaseStar from '@/components/Base/BaseStar/BaseStar.vue';

export default {
  name: 'BaseReviews',
  components: {
    BaseStar,
  },
  props: {
    rating: {
      type: Number,
      required: false,
      default: () => (0),
    },
    count: {
      type: Number,
      required: false,
      default: () => (0),
    },
    max: {
      type: Number,
      required: false,
      default: () => (5),
    },
  },
  computed: {
    finalMax() {
      return !this.max || this.max <= 0 ? 1 : this.max;
    },
    finalRating() {
      if (!this.rating) return 0;
      if (this.rating < 0) return 0;
      if (this.rating > this.max && this.max > 0) return this.max;
      if (this.max <= 0) return 0;

      return this.rating;
    },
    countText() {
      return this.count >= 1 ? this.count : 'No ratings';
    },
  },
  methods: {
    isFilled(number, rating) {
      return number <= rating;
    },
  },
};
</script>

<style lang="scss" src="./BaseReviews.scss" />
