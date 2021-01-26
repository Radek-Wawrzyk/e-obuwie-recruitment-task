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
import dayjs from 'dayjs';

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
      if (!this.dateStart && !this.dateEnd) this.$emit('set-date-start', day.date);
      if (!this.dateEnd && this.dateStart) this.$emit('set-date-end', day.date);

      if (this.dateStart && this.dateEnd) {
        const currentDate = dayjs(day.date);
        const dateFrom = dayjs(this.dateStart);
        const dateTo = dayjs(this.dateEnd);

        if (currentDate.isBefore(dateTo)) {
          this.$emit('set-date-start', day.date);
          this.$emit('set-date-end', this.dateEnd);
        }

        if (currentDate.isAfter(dateFrom)) {
          this.$emit('set-date-end', day.date);
        }
      }
    },
    isBetween(day) {
      return !!this.daysBetween.includes(day.date);
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarDates.scss" />
