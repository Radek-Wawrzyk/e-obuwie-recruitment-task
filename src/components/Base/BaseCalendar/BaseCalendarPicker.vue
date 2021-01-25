<template>
  <div class="base-calendar-picker">
    <label class="base-calendar-picker__label">
      {{ label }}
    </label>

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
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    openCalendar() {
      this.$emit('open-calendar');
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarPicker.scss" />
