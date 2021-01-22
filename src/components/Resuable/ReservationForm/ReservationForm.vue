<template>
  <section class="reservation-form">
    <header class="reservation-form__header">
      <h2 class="reservation-form__price">
        {{ price }} PLN
      </h2>

      <base-reviews
        :rating="reviewsRating"
        :count="reviewsCount"
        class="reservation-form__reviews"
      />
    </header>

    <div class="reservation-form__content">
      <!-- TODO: Calendar component -->
    </div>

    <footer class="reservation-form__bottom">
      <!-- TODO: Buttons for accepting -->
    </footer>
  </section>
</template>

<script>
import BaseReviews from '@/components/Base/BaseReviews/BaseReviews.vue';

export default {
  name: 'ReservationForm',
  components: {
    BaseReviews,
  },
  data: () => ({

  }),
  props: {
    price: {
      type: Number,
      required: true,
      default: () => (0),
    },
    reviewsRating: {
      type: Number,
      required: true,
      default: () => (0),
    },
    reviewsCount: {
      type: Number,
      required: true,
      default: () => (0),
    },
  },
  methods: {
    bookReservation() {
      // TODO: Action for booking dates
    },
  },
};
</script>

<style lang="scss" src="./ReservationForm.scss" />
