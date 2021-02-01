import BaseReviews from '@/components/Base/BaseReviews/BaseReviews';
import { shallowMount } from '@vue/test-utils';

describe('BaseReviews', () => {
  test('If rating is less than 0, component should set rating value as 0', () => {
    const wrapper = shallowMount(BaseReviews, {
      propsData: {
        rating: -2,
      },
    });

    expect(wrapper.vm.finalRating).toBe(0);
  });

  test('If count props is 0, component should set max value as 1', () => {
    const wrapper = shallowMount(BaseReviews, {
      propsData: {
        max: -2,
      },
    });

    expect(wrapper.vm.finalMax).toBe(1);
  });

  test('If max is less than 0, component should set max value as 1', () => {
    const wrapper = shallowMount(BaseReviews, {
      propsData: {
        max: -2,
      },
    });

    expect(wrapper.vm.finalMax).toBe(1);
  });

  test('If count props is less or equal 0, component should display "No ratings" message', () => {
    const wrapper = shallowMount(BaseReviews, {
      propsData: {
        count: 0,
      },
    });

    expect(wrapper.find('.base-reviews__counter').element.innerHTML).toMatch('No ratings');
  });

  test('If count props is bigger or equal 1, component should display number of ratings', () => {
    const wrapper = shallowMount(BaseReviews, {
      propsData: {
        count: 2,
      },
    });

    expect(wrapper.find('.base-reviews__counter').element.innerHTML.trim()).toBe('2');
  });
});
