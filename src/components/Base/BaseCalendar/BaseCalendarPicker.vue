<template>
  <div class="base-calendar-picker">
    <label class="base-calendar-picker__label">
      {{ label }}
    </label>

    <button
      class="base-calendar-picker__button"
      :class="[
        error ? 'base-calendar-picker__button--error' : false,
      ]"
      @click="openCalendar()"
    >
      <p class="base-calendar-picker__text">
        {{ dateStart ? dateStart : 'Check in' }}
      </p>
      <p class="base-calendar-picker__text">
        {{ dateEnd ? dateEnd : 'Check out' }}
      </p>
    </button>

    <transition name="fade">
      <span class="base-calendar-picker__error" v-if="error">
        {{ error }}
      </span>
    </transition>
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
    error: {
      type: String,
      required: false,
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
