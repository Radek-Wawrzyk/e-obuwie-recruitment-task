<template>
  <li
    class="base-calendar-day"
    :class="[
      isToday ? 'base-calendar-day--today' : false,
      isNotCurrentMonth ? 'base-calendar-day--not-currect' : false,
      isSelected ? 'base-calendar-day--selected' : false,
      isBetween ? 'base-calendar-day--is-between' : false,
      dateStart === day.date ? 'base-calendar-day--is-date-start' : false,
      dateEnd === day.date ? 'base-calendar-day--is-date-end' : false,
    ]"
    @click="selectDate()"
  >
    <span 
      class="base-calendar-day__label"
    >
      {{ dayInNumber }}
    </span>
  </li>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'BaseCalendarDay',
  props: {
    today: {
      type: String,
      required: false,
    },
    day: {
      type: Object,
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
    isBetween: {
      type: Boolean,
      required: false,
      default: () => (false),
    },
  },
  computed: {
    dayInNumber() {
      return dayjs(this.day.date).format('D');
    },
    isToday() {
      return this.day.date === this.today;
    },
    isNotCurrentMonth() {
      return !this.day.isCurrentMonth;
    },
    isSelected() {
      if (this.dateStart === this.day.date) return true;
      if (this.dateEnd === this.day.date) return true;

      return false;
    },
  },
  methods: {
    selectDate() {
      this.$emit('select-date', this.day);
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarDay.scss" />
