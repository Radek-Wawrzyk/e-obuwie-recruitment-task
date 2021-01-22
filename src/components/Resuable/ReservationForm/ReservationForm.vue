<template>
  <section class="reservation-form">
    <header class="reservation-form__header">
      <h2 class="reservation-form__price">
        {{ price }} PLN
      </h2>

      <base-reviews
        :rating="reviewsRating"
        :count="reviewsCount"
        :max="5"
        class="reservation-form__reviews"
      />
    </header>

    <div class="reservation-form__content">
      <!-- TODO: Calendar component -->

      <base-calendar
        v-model="todaysDate"
        class="reservation-form__calendar"
      />

      <base-button
        title="Make a reservation"
        full-size
        @click="bookReservation()"
      >
        {{ buttonText }}
      </base-button>
    </div>

    <footer class="reservation-form__bottom">
      <!-- TODO: Buttons for accepting -->
    </footer>
  </section>
</template>

<script>
import BaseReviews from '@/components/Base/BaseReviews/BaseReviews.vue';
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseCalendar from '@/components/Base/BaseCalendar/BaseCalendar.vue';

export default {
  name: 'ReservationForm',
  components: {
    BaseReviews,
    BaseButton,
    BaseCalendar,
  },
  data: () => ({
    todaysDate: new Date(),
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
  computed: {
    buttonText() {
      return 'Make a reservation';
    },
  },
  methods: {
    bookReservation() {
      // TODO: Action for booking dates
      this.$emit('bookReservation');
    },
    submitForm() {
      // TODO: Validation for form
    },
  },
};
</script>

<style lang="scss" src="./ReservationForm.scss" />
