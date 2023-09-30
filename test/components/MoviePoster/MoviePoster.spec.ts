import { mount } from '@vue/test-utils'
import { MoviePosterMockData } from './mockData'
import MoviePoster from '@/components/MoviePoster/MoviePoster.vue'

describe('MoviePoster.vue', () => {
  it('should render movie poster component with correct props', () => {
    const wrapper = mount(MoviePoster, {
      propsData: MoviePosterMockData,
    })

    expect(wrapper.find('.movie-poster').exists()).toBeTruthy()
    expect(wrapper.find('.movie-poster__image').attributes('src')).toContain(
      'https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg'
    )
    expect(wrapper.find('.movie-poster__rating').text()).toContain('7.4')
  })

  it('should not render movie poster component without correct props', () => {
    const wrapper = mount(MoviePoster, {
      propsData: {},
    })

    expect(wrapper.find('.movie-poster').exists()).toBeFalsy()
  })
})
