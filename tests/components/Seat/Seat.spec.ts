import { mount } from '@vue/test-utils'
import Seat from '@/components/Seat/Seat.vue'
import Typography from '@/components/Typography/Typography.vue'

describe('SeatComponent.vue', () => {
  it('should render the seat name correctly', () => {
    const seat = { seatNumber: 'A1', bookings: [] }
    const wrapper = mount(Seat, {
      propsData: {
        seat,
      },
    })

    expect(wrapper.findComponent(Typography).text()).toBe(seat.seatNumber)
  })

  it('should emits a "seat-clicked" event when the seat is clicked', async () => {
    const seat = { seatNumber: 'A1', bookings: [] }
    const wrapper = mount(Seat, {
      propsData: {
        seat,
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('seat-clicked')).toBeTruthy()
    expect(wrapper.emitted('seat-clicked')?.[0]).toEqual([seat.seatNumber])
  })

  it('should apply secondary color to the Typography component', () => {
    const seat = { seatNumber: 'A1', bookings: [] }
    const wrapper = mount(Seat, {
      propsData: {
        seat,
      },
    })

    const typography = wrapper.findComponent(Typography)
    expect(typography.props('color')).toBe('secondary')
  })
})
