<template>
  <form class="reservation-form" @submit.prevent="submitForm()">
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
      <base-calendar
        v-model="reservation.bookDates"
        class="reservation-form__calendar"
        :error="errors.bookDates"
      />

      <div class="reservation-form__data">
        <base-input
          class="reservation-form__data-input"
          v-model="reservation.firstName"
          label="First name"
          placeholder="John"
          name="firstName"
          :error="errors.firstName"
        />
        <base-input
          class="reservation-form__data-input"
          v-model="reservation.lastName"
          label="Last name"
          placeholder="Doe"
          name="lastName"
          :error="errors.lastName"
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
        native-type="submit"
      >
        Make a reservation
      </base-button>
    </div>
  </form>
</template>

<script>
import BaseReviews from '@/components/Base/BaseReviews/BaseReviews.vue';
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseInput from '@/components/Base/BaseInput/BaseInput.vue';
import BaseCalendar from '@/components/Base/BaseCalendar/BaseCalendar.vue';

import { isRequired, min } from '@/helpers/validation-models';

export default {
  name: 'ReservationForm',
  components: {
    BaseReviews,
    BaseButton,
    BaseInput,
    BaseCalendar,
  },
  data: () => ({
    reservation: {
      firstName: '',
      lastName: '',
      bookDates: [],
    },
    errors: {
      firstName: '',
      lastName: '',
      bookDates: '',
    },
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
  watch: {
    reservation: {
      deep: true,
      handler() {
        this.validateForm();
      },
    },
  },
  methods: {
    bookReservation() {
      this.$emit('book', {
        dates: this.reservation.bookDates,
        firstName: this.reservation.firstName,
        lastName: this.reservation.lastName,
      });
    },
    validateForm() {
      return new Promise((resolve) => {
        isRequired(this.reservation.firstName)
          ? delete this.errors.firstName
          : this.errors.firstName = 'The form field is required';

        isRequired(this.reservation.lastName)
          ? delete this.errors.lastName
          : this.errors.lastName = 'The form field is required';

        min(this.reservation.bookDates, 2)
          ? delete this.errors.bookDates
          : this.errors.bookDates = 'The form field is required';

        Object.keys(this.errors).length === 0 ? resolve(true) : resolve(false);
      });
    },
    async submitForm() {
      const status = await this.validateForm();
      status ? this.bookReservation() : false;
    },
    clearForm() {
      this.reservation.firstName = '';
      this.reservation.lastName = '';
      this.reservation.bookDates = [];

      // Make sure that there is a break between reseting values & errors
      setTimeout(() => {
        this.errors.firstName = '';
        this.errors.lastName = '';
        this.errors.bookDates = '';
      }, 100);
    },
  },
};
</script>

<style lang="scss" src="./ReservationForm.scss" />
