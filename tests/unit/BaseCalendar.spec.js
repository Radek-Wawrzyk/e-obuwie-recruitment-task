import BaseCalendar from '@/components/Base/BaseCalendar/BaseCalendar';
import { shallowMount, mount } from '@vue/test-utils';
import dayjs from 'dayjs';

describe('BaseCalendar', () => {
  test('Check if initial activeDate is validated date', () => {
    const wrapper = shallowMount(BaseCalendar);

    expect(dayjs(wrapper.vm.$data.activeDate).isValid()).toBe(true);
  });

  test('If user click button, calendar should have isActive as true', async () => {
    const wrapper = mount(BaseCalendar);
    const button =  wrapper.find('.base-calendar-picker__button');

    await button.trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
  });

  test('If calendar is open, ESC should close calendar', async () => {
    const wrapper = mount(BaseCalendar);
  
    await wrapper.setData({ isActive: true });
    await wrapper.trigger('keyup.esc');

    expect(wrapper.vm.isActive).toBe(false);
  });

  test('If calendar is not open, click on base-calendar-picker should open calendar', async () => {
    const wrapper = mount(BaseCalendar);
    
    await wrapper.find('.base-calendar-picker__button').trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
  });

  test('If user click previous month, activeDate should substract one month', async () => {
    const wrapper = mount(BaseCalendar);
    const activeDate = dayjs();

    await wrapper.setData({ 
      isActive: true,
      activeDate: activeDate,
    });

    const headerComponent = wrapper.findComponent({ name: 'BaseCalendarHeader' });
    await headerComponent.vm.$emit('set-prev-month');
    await wrapper.vm.$nextTick();

    expect(dayjs(wrapper.vm.currentMonthWithYear).format('YYYY-MM-DD')).toMatch(dayjs(activeDate).subtract(1, 'month').format('YYYY-MM-DD'));
  });

  test('If user click next month, activeDate should add one month', async () => {
    const wrapper = mount(BaseCalendar);
    const activeDate = dayjs();

    await wrapper.setData({ 
      isActive: true,
      activeDate: activeDate,
    });

    const headerComponent = wrapper.findComponent({ name: 'BaseCalendarHeader' });
    await headerComponent.vm.$emit('set-next-month');
    await wrapper.vm.$nextTick();

    expect(dayjs(wrapper.vm.currentMonthWithYear).format('YYYY-MM-DD')).toMatch(dayjs(activeDate).add(1, 'month').format('YYYY-MM-DD'));
  });
});