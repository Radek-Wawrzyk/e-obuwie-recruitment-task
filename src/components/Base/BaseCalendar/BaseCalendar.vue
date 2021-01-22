<template>
  <div class="base-calendar">
    <div class="base-calendar__inner">
      <base-calendar-header
        @set-prev-month="setPrevMonth()"
        @set-next-month="setNextMonth()"
        :current-month-with-year="currentMonthWithYear"
      />

      <base-calendar-week-days class="base-calendar__week-days" />

      <base-calendar-dates
        :today="today"
        :days="days"
      />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import BaseCalendarWeekDays from '@/components/Base/BaseCalendar/BaseCalendarWeekDays.vue';
import BaseCalendarHeader from '@/components/Base/BaseCalendar/BaseCalendarHeader.vue';
import BaseCalendarDates from '@/components/Base/BaseCalendar/BaseCalendarDates.vue';

export default {
  name: 'BaseCalendar',
  components: {
    BaseCalendarWeekDays,
    BaseCalendarHeader,
    BaseCalendarDates,
  },
  date: () => ({
    todaysDate: new Date(),
    isActive: false,
  }),
  methods: {
    setPrevMonth() {

    },
    setNextMonth() {

    },
  },
  computed: {
    currentMonthWithYear() {
      return dayjs(this.todaysDate).format('MMMM YYYY')
    },
    today() {
      return dayjs().format("YYYY-MM-DD");
    },
    days() {
      return Array.from({ length: 30 }).map((date, index) => index + 1);
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendar.scss" />
