import { mount } from '@vue/test-utils'
import Seat from '@/components/Seat/Seat.vue'
import Typography from '@/components/Typography/Typography.vue'

describe('SeatComponent.vue', () => {
  it('should render the seat name correctly', () => {
    const name = 'A1'
    const wrapper = mount(Seat, {
      propsData: {
        name,
      },
    })

    expect(wrapper.findComponent(Typography).text()).toBe(name)
  })

  it('should emits a "seat-clicked" event when the seat is clicked', async () => {
    const name = 'A1'
    const wrapper = mount(Seat, {
      propsData: {
        name,
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('seat-clicked')).toBeTruthy()
    expect(wrapper.emitted('seat-clicked')?.[0]).toEqual([name])
  })

  it('should apply secondary color to the Typography component', () => {
    const wrapper = mount(Seat, {
      propsData: {
        name: 'A1',
      },
    })

    const typography = wrapper.findComponent(Typography)
    expect(typography.props('color')).toBe('secondary')
  })
})
