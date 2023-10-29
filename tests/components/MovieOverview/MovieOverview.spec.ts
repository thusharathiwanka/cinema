import { mount } from '@vue/test-utils'
import { MovieOverviewMockData } from './mockData'
import MovieOverview from '@/components/MovieOverview/MovieOverview.vue'

describe('MovieOverview.vue', () => {
  it('should render movie overview component with correct props', () => {
    const wrapper = mount(MovieOverview, {
      propsData: MovieOverviewMockData,
      stubs: ['nuxt-link'],
    })

    expect(wrapper.find('.movie-overview').exists()).toBeTruthy()
    expect(wrapper.find('.movie-overview__details').exists()).toBeTruthy()
    expect(wrapper.find('.movie-overview__content').exists()).toBeTruthy()
    expect(wrapper.find('[data-cy="movie-overview__title"]').text()).toContain(
      'The Creator'
    )
    expect(
      wrapper.find('[data-cy="movie-overview__subtitle"]').text()
    ).toContain('Action')
    expect(
      wrapper.find('[data-cy="movie-overview__overview-content"]').text()
    ).toContain(
      'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.'
    )
    expect(wrapper.find('.movie-overview__extra').exists()).toBeTruthy()
    expect(wrapper.find('[data-cy="movie-overview__year"]').text()).toContain(
      '2023'
    )
    expect(
      wrapper.find('[data-cy="movie-overview__separator"]').text()
    ).toContain('•')
    expect(
      wrapper.find('[data-cy="movie-overview__runtime"]').text()
    ).toContain('1h 30m')
  })

  it('should not render movie overview component without correct props', () => {
    const wrapper = mount(MovieOverview, {
      propsData: {
        movie: {},
      },
    })

    expect(wrapper.find('.movie-overview').exists()).toBeFalsy()
  })
})
