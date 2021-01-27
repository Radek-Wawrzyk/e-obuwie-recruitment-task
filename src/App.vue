<template>
  <div id="app">
    <div class="container container--small">
      <reservation-form
        :price="price"
        :reviews-rating="reviewsRating"
        :reviews-count="reviewsCount"
        @book="bookReservation($event)"
      />
    </div>
  </div>
</template>

<script>
import ReservationForm from '@/components/Resuable/ReservationForm/ReservationForm.vue';

export default {
  name: 'App',
  components: {
    ReservationForm,
  },
  data: () => ({
    price: 298,
    reviewsCount: 144,
    reviewsRating: 3,
  }),
  methods: {
    bookReservation(reservation) {
      alert(`Thanks You have booked your reservation! Reservation details: 
        ${reservation.firstName} ${reservation.lastName} - ${reservation.dates[0]} - ${reservation.dates[1]}
      `);
    },
  },
};
</script>
