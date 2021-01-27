<template>
  <div class="base-calendar" @keyup.esc="closeCalendar()">
    <base-calendar-picker
      @open-calendar="openCalendar()"
      :date-start="dateStart"
      :date-end="dateEnd"
      :error="error"
      label="Dates"
    />

    <transition name="fade" mode="out-in">
      <div class="base-calendar__inner" v-if="isActive">
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
            :date-start="dateStart"
            :date-end="dateEnd"
            :days-between="daysBetween"
            @set-date-start="setDateStart($event)"
            @set-date-end="setDateEnd($event)"
          />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseCalendarWeekDays from '@/components/Base/BaseCalendar/BaseCalendarWeekDays.vue';
import BaseCalendarHeader from '@/components/Base/BaseCalendar/BaseCalendarHeader.vue';
import BaseCalendarDates from '@/components/Base/BaseCalendar/BaseCalendarDates.vue';
import BaseCalendarPicker from '@/components/Base/BaseCalendar/BaseCalendarPicker.vue';

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: 'BaseCalendar',
  components: {
    BaseCalendarWeekDays,
    BaseCalendarHeader,
    BaseCalendarDates,
    BaseCalendarPicker,
  },
  props: {
    bookedDates: {
      type: Array,
      required: false,
      default: () => ([]),
    },
    value: {
      type: Array,
      required: false,
      default: () => ([]),
    },
    error: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    activeDate: dayjs(),
    isActive: false,
    dateStart: null,
    dateEnd: null,
  }),
  watch: {
    dateStart() {
      this.dateStart && this.dateEnd ? this.bookDates() : false;
    },
    dateEnd() {
      this.dateStart && this.dateEnd ? this.bookDates() : false;
    },
    value: {
      deep: true,
      handler() {
        if (!this.value.length) {
          this.dateStart = null;
          this.dateEnd = null;
        }
      },
    },
  },
  methods: {
    setPrevMonth() {
      this.activeDate = dayjs(this.activeDate).subtract(1, 'month');
    },
    setNextMonth() {
      this.activeDate = dayjs(this.activeDate).add(1, 'month');
    },
    getWeekday(date) {
      return dayjs(date).weekday();
    },
    openCalendar() {
      this.isActive = true;
    },
    closeCalendar() {
      this.isActive = false;
    },
    handleOutsideClick({ target }) {
      const isClickInside = this.$el.contains(target);
      !isClickInside ? this.closeCalendar() : false;
    },
    bookDates() {
      this.$emit('input', [this.dateStart, this.dateEnd]);
      this.$emit('change', [this.dateStart, this.dateEnd]); // Optional event
    },
    setDateStart(date) {
      this.dateStart = date;
    },
    setDateEnd(date) {
      this.dateEnd = date;
    },
    getDatesBetween(dateStart, dateEnd) {
      const dates = [];
      const dateFrom = dayjs(dateStart);
      const dateTo = dayjs(dateEnd).add(1, 'day');
      let currentDate = dateFrom;

      while (currentDate.isBefore(dateTo)) {
        dates.push(currentDate.format('YYYY-MM-DD'));
        currentDate = currentDate.add(1, 'day');
      }

      return dates;
    },
  },
  computed: {
    daysBetween() {
      return this.getDatesBetween(this.dateStart, this.dateEnd);
    },
    currentMonthWithYear() {
      return dayjs(this.activeDate).format('MMMM YYYY');
    },
    today() {
      return dayjs().format('YYYY-MM-DD');
    },
    month() {
      return parseInt(this.activeDate.format('M'));
    },
    year() {
      return parseInt(this.activeDate.format('YYYY'));
    },
    days() {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays,
      ];
    },
    numberDaysInMonth() {
      return dayjs(this.activeDate).daysInMonth();
    },
    currentMonthDays() {
      return Array.from({ length: this.numberDaysInMonth }).map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format('YYYY-MM-DD'),
          isCurrentMonth: true,
        };
      });
    },
    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date,
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(1, 'month');

      // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(this.currentMonthDays[0].date)
        .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
        .date();

      return Array.from({ length: visibleNumberOfDaysFromPreviousMonth }).map((day, index) => {
        return {
          date: dayjs(
            `${previousMonth.year()}-${previousMonth.month()
              + 1}-${previousMonthLastMondayDayOfMonth + index}`,
          ).format('YYYY-MM-DD'),
          isCurrentMonth: false,
        };
      });
    },
    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`,
      );
      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, 'month');
      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;

      return Array.from({ length: visibleNumberOfDaysFromNextMonth }).map((day, index) => {
        return {
          date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format('YYYY-MM-DD'),
          isCurrentMonth: false,
        };
      });
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);

    // If value exists => set value to data
    if (this.value.length === 2) {
      this.dateStart = this.value[0];
      this.dateEnd = this.value[1];
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>

<style lang="scss" src="./BaseCalendar.scss" />
