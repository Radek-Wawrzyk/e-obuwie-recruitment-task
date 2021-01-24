<template>
  <div class="base-calendar-picker">
    <button
      class="base-calendar-picker__button"
      @click="openCalendar()"
    >
      <p class="base-calendar-picker__text">
        Check in
      </p>
      <p class="base-calendar-picker__text">
        Check out
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseCalendarPicker',
  methods: {
    openCalendar() {
      this.$emit('open-calendar');
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarPicker.scss" />
