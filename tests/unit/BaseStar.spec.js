import BaseStar from '@/components/Base/BaseStar/BaseStar';
import { shallowMount } from "@vue/test-utils";

describe('BaseStar', () => {
  test('If isFilled prop is true, svg should has fill property as green colour', () => {
    const wrapper = shallowMount(BaseStar, {
      propsData: {
        isFilled: true,
      },
    });
    
    expect(wrapper.find('.base-star__inner').attributes('fill')).toBe('#3a7a7d');
  });

  test('If isFilled prop is false, svg should has fill property as gray colour', () => {
    const wrapper = shallowMount(BaseStar, {
      propsData: {
        isFilled: false,
      },
    });
    
    expect(wrapper.find('.base-star__inner').attributes('fill')).toBe('#d2d6d3');
  });
});