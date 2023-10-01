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
    expect(wrapper.find('.typography--subtitle').text()).toContain('Saw X')
    expect(wrapper.find('.typography--body').text()).toContain('Crime')
  })

  it('should not render movie card component without correct props', () => {
    const wrapper = mount(MovieCard, {
      propsData: { movie: null },
    })

    expect(wrapper.find('.movie-card').exists()).toBeFalsy()
  })
})
