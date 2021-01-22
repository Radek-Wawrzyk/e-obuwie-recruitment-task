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
    <p class="base-button__text">
      <slot></slot>
    </p>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      required: false,
      default: null,
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
        this.fullSize ? 'base-button--full-size' : '',
        this.disabled ? 'base-button--disabled' : '',
      ];
    },
  },
};
</script>

<style lang="scss" src="./BaseButton.scss" />
