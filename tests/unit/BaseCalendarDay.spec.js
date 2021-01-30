import BaseCalendarDay from '@/components/Base/BaseCalendar/BaseCalendarDay';
import { mount, shallowMount } from "@vue/test-utils";

describe('BaseCalendarDay', () => {
  test('If today is the same as day props, isToday computed should be true', () => {
    const wrapper = mount(BaseCalendarDay, {
      propsData: {
        day: {
          date: '2020-12-31',
          isCurrentMonth: false,
        },
        today: '2020-12-31'
      },
    });

    
    expect(wrapper.vm.isToday).toBe(true);
  });

  test('If today is not the same as day props, isToday computed should be false', () => {
    const wrapper = mount(BaseCalendarDay, {
      propsData: {
        day: {
          date: '2020-12-31',
          isCurrentMonth: false,
        },
        today: '2020-11-31'
      },
    });

    expect(wrapper.vm.isToday).toBe(false);
  });

  test('If today is the same as day props, component should have today CSS class', () => {
    const wrapper = mount(BaseCalendarDay, {
      propsData: {
        day: {
          date: '2020-12-31',
          isCurrentMonth: false,
        },
        today: '2020-12-31'
      },
    });

    expect(wrapper.classes('base-calendar-day--today')).toBe(true);
  });

  test('If day is selected, component should have selected CSS class', () => {
    const wrapper = mount(BaseCalendarDay, {
      propsData: {
        day: {
          date: '2020-12-31',
          isCurrentMonth: false,
        },
        today: '2020-12-31',
        dateStart: '2020-12-31'
      },
    });

    expect(wrapper.classes('base-calendar-day--selected')).toBe(true);
  });

  test('If day is between dates, component should have between CSS class', () => {
    const wrapper = mount(BaseCalendarDay, {
      propsData: {
        day: {
          date: '2020-12-31',
          isCurrentMonth: false,
        },
        today: '2020-12-31',
        isBetween: true,
      },
    });

    expect(wrapper.classes('base-calendar-day--is-between')).toBe(true);
  });
});