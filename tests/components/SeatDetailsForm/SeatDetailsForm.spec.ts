import { shallowMount } from '@vue/test-utils'
import SeatDetailsForm from '@/components/SeatDetailsForm/SeatDetailsForm.vue'
import SeatLayout from '@/components/SeatLayout/SeatLayout.vue'
import { seatLayout } from '~/configs/movie.config'

describe('SeatDetailsFormComponent.vue', () => {
  it('should render the SeatLayout component with seats data', async () => {
    const wrapper = shallowMount(SeatDetailsForm, {
      mocks: { $route: { params: { id: '951491' } } },
    })
    await wrapper.setData({ seats: seatLayout })
    const seatLayoutComponent = wrapper.findComponent(SeatLayout)

    expect(seatLayoutComponent.exists()).toBe(true)
    expect(seatLayoutComponent.props('seats')).toEqual(wrapper.vm.$data.seats)
  })

  it('should not render the SeatLayout component with seats data', () => {
    const wrapper = shallowMount(SeatDetailsForm, {
      mocks: { $route: { params: { id: '951491' } } },
      propsData: { seats: {} },
    })
    const seatLayoutComponent = wrapper.findComponent(SeatLayout)

    expect(seatLayoutComponent.exists()).toBe(false)
  })

  it('should render a "Typography" component with the text "Select Seat"', () => {
    const wrapper = shallowMount(SeatDetailsForm, {
      mocks: { $route: { params: { id: '951491' } } },
    })
    const typographyComponent = wrapper.findComponent({
      name: 'TypographyComponent',
    })

    expect(typographyComponent.exists()).toBe(true)
    expect(typographyComponent.text()).toBe('Select Seats*')
  })
})
