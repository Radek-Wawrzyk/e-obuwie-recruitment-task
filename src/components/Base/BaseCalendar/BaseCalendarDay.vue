<template>
  <li
    class="base-calendar-day"
    :class="[
      isToday ? 'base-calendar-day--today' : false,
    ]"
  >
    <span class="base-calendar-day__label">
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
  },
  computed: {
    dayInNumber() {
      return dayjs(this.day.date).format('D');
    },
    isToday() {
      return this.day.date === this.today;
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarDay.scss" />
