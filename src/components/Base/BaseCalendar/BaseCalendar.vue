<template>
  <div class="base-calendar">
    <div class="base-calendar__inner">
      <base-calendar-header
        @set-prev-month="setPrevMonth()"
        @set-next-month="setNextMonth()"
        :current-month-with-year="currentMonthWithYear"
      />

      <base-calendar-week-days class="base-calendar__week-days" />
    </div>
  </div>
</template>

<script>
import BaseCalendarDay from '@/components/Base/BaseCalendarDay/BaseCalendarDay.vue';
import dayjs from 'dayjs';
import BaseCalendarWeekDays from '@/components/Base/BaseCalendarWeekDays/BaseCalendarWeekDays.vue';
import BaseCalendarHeader from '@/components/Base/BaseCalendar/BaseCalendarHeader.vue';

export default {
  name: 'BaseCalendar',
  components: {
    BaseCalendarDay,
    BaseCalendarWeekDays,
    BaseCalendarHeader,
  },
  props: {

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
  },
};
</script>

<style lang="scss" src="./BaseCalendar.scss" />
