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

      <div class="reservation-form__data">
        <base-input
          class="reservation-form__data-input"
          v-model="firstName"
          label="First name"
          placeholder="John"
        />
        <base-input
          class="reservation-form__data-input"
          v-model="lastName"
          label="Last name"
          placeholder="Doe"
        />
      </div>

      <base-button
        title="Clear form"
        full-size
        type="outline"
        @click="clearForm()"
        class="reservation-form__clear-button"
      >
        Clear form
      </base-button>

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
import BaseInput from '@/components/Base/BaseInput/BaseInput.vue';
import BaseCalendar from '@/components/Base/BaseCalendar/BaseCalendar.vue';

export default {
  name: 'ReservationForm',
  components: {
    BaseReviews,
    BaseButton,
    BaseInput,
    BaseCalendar,
  },
  data: () => ({
    todaysDate: new Date(),
    firstName: '',
    lastName: '',
    bookedDate: null,
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
    clearForm() {
      this.firstName = '';
      this.lastName = '';
      this.bookedDate = null;
    },
  },
};
</script>

<style lang="scss" src="./ReservationForm.scss" />
