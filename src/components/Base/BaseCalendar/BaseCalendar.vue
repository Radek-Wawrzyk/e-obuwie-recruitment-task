<template>
  <div class="base-calendar">
    <div class="base-calendar__inner">
      <base-calendar-header
        @set-prev-month="setPrevMonth()"
        @set-next-month="setNextMonth()"
        :current-month-with-year="currentMonthWithYear"
      />

      <base-calendar-week-days class="base-calendar__week-days" />

      <transition name="fade" mode="out-in">
        <base-calendar-dates
          :today="today"
          :days="days"
          :key="currentMonthWithYear"
        />
      </transition>
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
  data: () => ({
    todaysDate: new Date(),
    isActive: false,
    selectedDate: dayjs(),
  }),
  methods: {
    setPrevMonth() {
      this.selectedDate = dayjs(this.selectedDate).subtract(1, "month");
    },
    setNextMonth() {
      this.selectedDate = dayjs(this.selectedDate).add(1, "month");
    },
  },
  computed: {
    currentMonthWithYear() {
      return dayjs(this.selectedDate).format('MMMM YYYY');
    },
    today() {
      return dayjs().format('YYYY-MM-DD');
    },
    month() {
      return parseInt(this.selectedDate.format('M'));
    },
    year() {
      return parseInt(this.selectedDate.format('YYYY'));
    },
    days() {
      return [
        ...this.currentMonthDays,
      ];
    },
    numberDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },
    currentMonthDays() {
      return Array.from({ length: this.numberDaysInMonth }).map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format('YYYY-MM-DD'),
          isCurrentMonth: true,
        };
      });
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendar.scss" />
