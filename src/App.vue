<template>
  <div id="app">
    <div class="container container--small">
      <reservation-form
        :price="298"
        :reviews-rating="3"
        :reviews-count="144"
      />
    </div>
  </div>
</template>

<script>
import ReservationForm from '@/components/Resuable/ReservationForm/ReservationForm.vue';

export default {
  name: 'App',
  components: { 
    ReservationForm 
  },
  data: () => ({

  }),
};
</script>
