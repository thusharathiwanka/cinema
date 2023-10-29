import { Wrapper, mount } from '@vue/test-utils'
import { movieBookingSummaryMockData } from './mockData'
import MovieBookingSummary from '@/components/MovieBookingSummary/MovieBookingSummary.vue'

describe('MovieBookingSummary.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(MovieBookingSummary, {
      propsData: movieBookingSummaryMockData,
      stubs: ['nuxt-link'],
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should render booking summary component with correct props', () => {
    expect(wrapper.find('.booking-summary').exists()).toBeTruthy()
  })

  it('should not render booking summary component', async () => {
    await wrapper.setProps({ movie: {} })
    expect(wrapper.find('.booking-summary').exists()).toBeFalsy()
  })

  it('should render the movie details correctly', () => {
    expect(wrapper.find('[data-cy="booking-summary__title"]').text()).toBe(
      'Booking Summary'
    )
    expect(
      wrapper.find('[data-cy="booking-summary__movie-title"]').text()
    ).toBe('The Creator')
    expect(
      wrapper.find('[data-cy="booking-summary__movie-subtitle"]').text()
    ).toContain('Action')
    expect(
      wrapper.find('[data-cy="booking-summary__movie-overview"]').text()
    ).toBe(
      'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.'
    )
  })

  it('should render the booked date and time correctly', () => {
    expect(wrapper.find('.booking-summary__booked-date').text()).toContain(
      'Booked Date:'
    )
    expect(wrapper.find('.booking-summary__booked-time').text()).toContain(
      'Booked Time:'
    )
    expect(wrapper.find('.booking-summary__seats').text()).toContain('Seats:')
  })

  it('should render a "Done" button', () => {
    expect(wrapper.find('.booking-summary__back').exists()).toBe(true)
  })
})
