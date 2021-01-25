<template>
  <div class="base-input">
    <label 
      v-if="label" 
      class="base-input__label" 
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :value="value"
      :disabled="disabled"
      :id="name"
      :placeholder="placeholder"
      autocomplete="off"
      class="base-input__inner"
      @input="updateValue($event)"
      @change="updateValue($event)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: [String, Number],
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    name: {
      type: String,
      required: false,
      default: 'Field',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" src="./BaseInput.scss" />
