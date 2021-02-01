import BaseButton from '@/components/Base/BaseButton/BaseButton';
import { shallowMount, mount } from '@vue/test-utils';

describe('BaseButton', () => {
  test('Render img when props type is `icon`', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        type: 'icon',
        icon: 'chevron-left.svg',
      },
    });

    expect(wrapper.find('.base-button__icon').exists()).toBeTruthy();
  });

  test('Render component type as <button> when there is no props', () => {
    const wrapper = shallowMount(BaseButton);

    expect(wrapper.vm.componentType).toBe('button');
  });

  test('Render component type as <router-link> when nativeLink & to props are true', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        to: '/',
        nativeLink: false,
      },
      stubs: ['router-link'],
    });

    expect(wrapper.vm.componentType).toBe('router-link');
  });

  test('Render component type as <a> when nativeLink & to props are true', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        to: '/',
        nativeLink: true,
      },
    });

    expect(wrapper.vm.componentType).toBe('a');
  });

  test('If nativeType prop is submit, button type attribute is submit', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        nativeType: 'submit',
      },
    });

    expect(wrapper.find('.base-button').attributes('type')).toBe('submit');
  });

  test('If there is no nativeType props, default type is button', () => {
    const wrapper = shallowMount(BaseButton);

    expect(wrapper.find('.base-button').attributes('type')).toBe('button');
  });

  test('If there is a disable props, button should be disabled', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.find('.base-button').attributes('disabled')).toBe('disabled');
  });

  test('If there is a disable props, button should has disabled CSS class', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('base-button--disabled');
  });
});
