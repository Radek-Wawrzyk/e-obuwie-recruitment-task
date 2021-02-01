<template>
  <component
    :is="componentType"
    :disabled="disabled"
    :class="classes"
    :to="to ? to : false"
    :title="title"
    :aria-label="title"
    :type="nativeType"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
  >
    <p class="base-button__text" v-if="type !== 'icon'">
      <slot></slot>
    </p>

    <img
      class="base-button__icon"
      alt
      :src="`/assets/icons/${icon}.svg`"
      v-if="type === 'icon'"
    />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      required: false,
      default: () => (null),
    },
    nativeLink: {
      type: Boolean,
      required: false,
      default: () => (false),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: () => ('primary'),
    },
    title: {
      type: String,
      required: false,
      default: () => (''),
    },
    nativeType: {
      type: String,
      required: false,
      default: () => ('button'),
    },
    fullSize: {
      type: Boolean,
      required: false,
      default: () => (false),
    },
    icon: {
      type: String,
      required: false,
      default: () => (''),
    },
  },
  computed: {
    componentType() {
      if (this.to && this.nativeLink) return 'a';
      if (this.to && !this.nativeLink) return 'router-link';
      if (!this.to && !this.nativeLink) return 'button';

      return 'button';
    },
    classes() {
      return [
        this.type === 'primary' ? 'base-button--primary' : '',
        this.type === 'icon' ? 'base-button--icon' : '',
        this.type === 'outline' ? 'base-button--outline' : '',
        this.fullSize ? 'base-button--full-size' : '',
        this.disabled ? 'base-button--disabled' : '',
      ];
    },
  },
};
</script>

<style lang="scss" src="./BaseButton.scss" />
