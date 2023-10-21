import { mount } from '@vue/test-utils'
import MovieBookingForm from '@/components/MovieBookingForm/MovieBookingForm.vue'
import TimeDetailsForm from '@/components/TimeDetailsForm/TimeDetailsForm.vue'
import PersonalDetailsForm from '@/components/PersonalDetailsForm/PersonalDetailsForm.vue'
import SeatDetailsForm from '@/components/SeatDetailsForm/SeatDetailsForm.vue'
import Typography from '@/components/Typography/Typography.vue'

describe('MovieBookingForm.vue', () => {
  it('should render the component with the initial step', () => {
    const wrapper = mount(MovieBookingForm, {
      mocks: { $route: { params: { id: '' } } },
    })

    const typographyComponent = wrapper.findComponent(Typography)
    expect(typographyComponent.exists()).toBeTruthy()
    expect(typographyComponent.text()).toBe('Book My Show')

    const timeDetailsForm = wrapper.findComponent(TimeDetailsForm)
    expect(timeDetailsForm.exists()).toBe(true)

    const personalDetailsForm = wrapper.findComponent(PersonalDetailsForm)
    expect(personalDetailsForm.exists()).toBe(false)

    const seatDetailsForm = wrapper.findComponent(SeatDetailsForm)
    expect(seatDetailsForm.exists()).toBe(false)

    const backButton = wrapper.find('[data-cy="booking-form__back"]')
    expect(backButton.isVisible()).toBe(false)

    const nextButton = wrapper.find('[data-cy="booking-form__next"]')
    expect(nextButton.exists()).toBe(true)

    const bookButton = wrapper.find('[data-cy="booking-form__book"]')
    expect(bookButton.isVisible()).toBe(false)
  })

  it('should allow navigating between steps', async () => {
    const wrapper = mount(MovieBookingForm, {
      mocks: { $route: { params: { id: '' } } },
    })

    await wrapper.find('[data-cy="booking-form__next"]').trigger('click')

    const personalDetailsForm = wrapper.findComponent(PersonalDetailsForm)
    expect(personalDetailsForm.isVisible()).toBe(true)

    const backButton = wrapper.find('[data-cy="booking-form__back"]')
    expect(backButton.isVisible()).toBe(true)

    await backButton.trigger('click')

    const timeDetailsForm = wrapper.findComponent(TimeDetailsForm)
    expect(timeDetailsForm.isVisible()).toBe(true)

    const nextButton = wrapper.find('[data-cy="booking-form__next"]')
    expect(nextButton.isVisible()).toBe(true)
  })

  it('should submits the form on the last step', async () => {
    const wrapper = mount(MovieBookingForm, {
      mocks: { $route: { params: { id: '' } } },
    })

    await wrapper.find('[data-cy="booking-form__next"]').trigger('click')
    await wrapper.find('[data-cy="booking-form__next"]').trigger('click')

    const seatDetailsForm = wrapper.findComponent(SeatDetailsForm)
    expect(seatDetailsForm.isVisible()).toBe(true)

    const bookButton = wrapper.find('[data-cy="booking-form__book"]')
    expect(bookButton.isVisible()).toBe(true)

    // TODO: Add submit logic
  })
})
