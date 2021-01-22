<template>
  <ul class="base-calendar-dates">
    <base-calendar-day
      v-for="(day, index) in days"
      :key="index"
      :today="today"
      :day="day"
      class="base-calendar-dates__item"
    />
  </ul>
</template>

<script>
import BaseCalendarDay from '@/components/Base/BaseCalendar/BaseCalendarDay.vue';

export default {
  name: 'BaseCalendarDates',
  components: {
    BaseCalendarDay,
  },
  props: {
    days: {
      type: Array,
      required: true,
    },
    today: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarDates.scss" />
