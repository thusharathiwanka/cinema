import { mount, RouterLinkStub } from '@vue/test-utils'
import { MovieCardListMockData } from './mockData'
import MovieCardList from '@/components/MovieCardList/MovieCardList.vue'

describe('MovieCardList.vue', () => {
  it('should render movie card list component with correct props', () => {
    const wrapper = mount(MovieCardList, {
      propsData: MovieCardListMockData,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.find('.movie-card-list').exists()).toBeTruthy()
  })

  it('should render movie card list component with movies mock data', () => {
    const wrapper = mount(MovieCardList, {
      propsData: MovieCardListMockData,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    MovieCardListMockData.movies.forEach((movie, index) => {
      expect(
        wrapper.findAll('[data-cy="movie-card__title"]').at(index).text()
      ).toContain(movie.title)
    })
  })

  it('should not render movie card list component without correct props', () => {
    const wrapper = mount(MovieCardList, {
      propsData: { movies: [] },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.find('.movie-card-list').exists()).toBeFalsy()
  })
})
