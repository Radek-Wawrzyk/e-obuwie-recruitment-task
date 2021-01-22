<template>
  <li
    class="base-calendar-day"
    :class="[
      isToday ? 'base-calendar-day--today' : false,
    ]"
  >
    <span class="base-calendar-day__label">
      {{ day }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'BaseCalendarDay',
  props: {
    isToday: {
      type: Boolean,
      required: false,
      default: () => (false),
    },
  },
  computed: {
    day() {
      return 1;
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarDay.scss" />
