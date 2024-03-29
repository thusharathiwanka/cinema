import { mount } from '@vue/test-utils'
import SeatLayout from '@/components/SeatLayout/SeatLayout.vue'
import Seat from '@/components/Seat/Seat.vue'

describe('SeatLayout.vue', () => {
  it('should render the correct number of seats', () => {
    const seats = {
      row1: [
        { seatNumber: 'A1', bookings: [] },
        { seatNumber: 'A2', bookings: [] },
      ],
      row2: [
        { seatNumber: 'B1', bookings: [] },
        { seatNumber: 'B2', bookings: [] },
      ],
    }
    const wrapper = mount(SeatLayout, {
      propsData: {
        seats,
      },
    })

    const seatComponents = wrapper.findAllComponents(Seat)
    expect(seatComponents.length).toBe(4)
  })

  it('should emits "seat-clicked" event when a seat is clicked', async () => {
    const seats = {
      row1: [{ seatNumber: 'A1', bookings: [] }],
    }
    const wrapper = mount(SeatLayout, {
      propsData: {
        seats,
      },
    })

    const seatComponent = wrapper.findComponent(Seat)
    await seatComponent.trigger('click')

    expect(seatComponent.emitted('seat-clicked')).toBeTruthy()
    expect(seatComponent.emitted('seat-clicked')?.[0]).toEqual(['A1'])
  })

  it('should tracks selected seats when seats are clicked', async () => {
    const seats = {
      row1: [
        { seatNumber: 'A1', bookings: [] },
        { seatNumber: 'A2', bookings: [] },
      ],
    }
    const wrapper = mount(SeatLayout, {
      propsData: {
        seats,
      },
    })

    const seatComponents = wrapper.findAllComponents(Seat)

    for (const seatComponent of seatComponents.wrappers) {
      await seatComponent.trigger('click')
    }

    expect(wrapper.vm.$data.selectedSeats).toEqual(['A1', 'A2'])
  })
})
