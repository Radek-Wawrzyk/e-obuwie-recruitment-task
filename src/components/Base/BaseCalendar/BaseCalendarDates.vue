<template>
  <ul class="base-calendar-dates">
    <base-calendar-day
      v-for="(day, index) in days"
      :key="index"
      :today="today"
      :day="day"
      :date-start="dateStart"
      :date-end="dateEnd"
      :is-between="isBetween(day)"
      class="base-calendar-dates__item"
      @select-date="selectDate($event)"
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
    dateStart: {
      type: String,
      required: false,
      default: () => (null),
    },
    dateEnd: {
      type: String,
      required: false,
      default: () => (null),
    },
    daysBetween: {
      type: Array,
      required: false,
      default: () => ([]),
    },
  },
  methods: {
    selectDate(day) {
      if (this.dateEnd) {
        this.$emit('set-date-start', day.date);
        return;
      }

      this.$emit('set-date-end', day.date);
    },
    isBetween(day) {
      return this.daysBetween.includes(day.date) ? true : false;
    }
  },
};
</script>

<style lang="scss" src="./BaseCalendarDates.scss" />
