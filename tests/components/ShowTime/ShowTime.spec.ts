import { mount } from '@vue/test-utils'
import ShowTime from '@/components/ShowTime/ShowTime.vue'

describe('ShowTime.vue', () => {
  it('should render show time component with correct props', () => {
    const wrapper = mount(ShowTime, { propsData: { showTime: '10:30 AM' } })

    expect(wrapper.find('.showtime').exists()).toBeTruthy()
    expect(wrapper.find('.showtime__value').text()).toEqual('10:30 AM')
  })

  it('should not render show time component without correct props', () => {
    const wrapper = mount(ShowTime, { propsData: { showTime: '' } })

    expect(wrapper.find('.showtime').exists()).toBeFalsy()
  })
})
