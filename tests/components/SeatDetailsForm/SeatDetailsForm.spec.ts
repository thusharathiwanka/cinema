import { mount } from '@vue/test-utils'
import SeatDetailsForm from '@/components/SeatDetailsForm/SeatDetailsForm.vue'
import SeatLayout from '@/components/SeatLayout/SeatLayout.vue'

describe('SeatDetailsFormComponent.vue', () => {
  it('should render the SeatLayout component with seats data', () => {
    const wrapper = mount(SeatDetailsForm)
    const seatLayoutComponent = wrapper.findComponent(SeatLayout)

    expect(seatLayoutComponent.exists()).toBe(true)
    expect(seatLayoutComponent.props('seats')).toEqual(wrapper.vm.$data.seats)
  })

  it('should render a "Typography" component with the text "Select Seat"', () => {
    const wrapper = mount(SeatDetailsForm)
    const typographyComponent = wrapper.findComponent({
      name: 'TypographyComponent',
    })

    expect(typographyComponent.exists()).toBe(true)
    expect(typographyComponent.text()).toBe('Select Seat')
  })
})
