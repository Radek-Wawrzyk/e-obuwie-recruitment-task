<template>
  <ul class="base-calendar-week-days">
    <li 
      class="base-calendar-week-days__item"
      v-for="date in weekDays"
      :key="date"
    >
      {{ date }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseCalendarWeekDays',
  computed: {
    weekDays() {
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarWeekDays.scss" />
