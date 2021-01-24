<template>
  <div class="base-calendar-picker">
    <button
      class="base-calendar-picker__button"
      @click="openCalendar()"
    >
      <p class="base-calendar-picker__text">
        {{ dateStart ? dateStart : 'Check in' }}
      </p>
      <p class="base-calendar-picker__text">
        {{ dateEnd ? dateEnd : 'Check out' }}
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseCalendarPicker',
  props: {
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
  },
  methods: {
    openCalendar() {
      this.$emit('open-calendar');
    },
  },
  // computed: {
  //   dateFrom() {
  //     ret
  //   },
  //   dateTo() {

  //   },
  // },
};
</script>

<style lang="scss" src="./BaseCalendarPicker.scss" />
