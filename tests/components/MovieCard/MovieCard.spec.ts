import { mount } from '@vue/test-utils'
import { MovieCardMockData } from './mockData'
import MovieCard from '@/components/MovieCard/MovieCard.vue'

describe('MovieCard.vue', () => {
  it('should render movie card component with correct props', () => {
    const wrapper = mount(MovieCard, {
      propsData: MovieCardMockData,
    })

    expect(wrapper.find('.movie-card').exists()).toBeTruthy()
    expect(wrapper.find('.movie-card__text-container').exists()).toBeTruthy()
    expect(wrapper.find('[data-cy="movie-card__title"]').text()).toContain(
      'The Creator'
    )
    expect(wrapper.find('[data-cy="movie-card__subtitle"]').text()).toContain(
      'Action'
    )
  })

  it('should not render movie card component without correct props', () => {
    const wrapper = mount(MovieCard, {
      propsData: { movie: null },
    })

    expect(wrapper.find('.movie-card').exists()).toBeFalsy()
  })
})
