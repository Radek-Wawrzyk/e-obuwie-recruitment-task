<template>
  <header class="base-calendar-header">
    <base-button
      @click="setPrevMonth()"
      icon="chevron-left"
      type="icon"
      class="base-calendar-header__button"
    />

    <transition name="fade" mode="out-in">
      <h4 class="base-calendar-header__date" :key="currentMonthWithYear">
        {{ currentMonthWithYear }}
      </h4>
    </transition>

    <base-button
      @click="setNextMonth()"
      icon="chevron-right"
      type="icon"
      class="base-calendar-header__button"
    />
  </header>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';

export default {
  name: 'BaseCalendarHeader',
  components: {
    BaseButton,
  },
  props: {
    currentMonthWithYear: {
      type: String,
      required: true,
    },
  },
  methods: {
    setPrevMonth() {
      this.$emit('set-prev-month');
    },
    setNextMonth() {
      this.$emit('set-next-month');
    },
  },
};
</script>

<style lang="scss" src="./BaseCalendarHeader.scss" />
