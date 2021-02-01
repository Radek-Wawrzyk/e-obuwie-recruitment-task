import BaseInput from '@/components/Base/BaseInput/BaseInput';
import { shallowMount } from '@vue/test-utils';

describe('BaseInput', () => {
  test('Render label when is passed', () => {
    const label = 'Label';
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        label,
      },
    });

    expect(wrapper.find('.base-input__label').text()).toBe(label);
  });

  test('Render error message when is an error', () => {
    const errorMessage = 'This field is required';
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        error: errorMessage,
      },
    });

    expect(wrapper.find('.base-input__error').text()).toMatch(errorMessage);
  });

  test('Add CSS error class when is an error', () => {
    const errorMessage = 'This field is required';
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        error: errorMessage,
      },
    });

    expect(wrapper.find('.base-input__inner').element.classList.contains('base-input__inner--error')).toBe(true);
  });

  test('By default input type should be a text', () => {
    const type = 'text';
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        type,
      },
    });

    expect(wrapper.find('.base-input__inner').attributes('type')).toBe(type);
  });

  test('If disable props is true, input should be disabled', () => {
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.find('.base-input__inner').attributes('disabled')).toBe('disabled');
  });

  test('Check if v-model matches value props', () => {
    const value = 'Hello World';
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        value,
      },
    });

    expect(wrapper.find('.base-input__inner').element.value).toBe(value);
  });
});
