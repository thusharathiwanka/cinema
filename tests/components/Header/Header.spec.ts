import { Wrapper, mount } from '@vue/test-utils'
import Header from '@/components/Header/Header.vue'

describe('Header.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(Header, {
      mocks: {
        $route: {
          path: '/',
        },
      },
      stubs: ['nuxt-link'],
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should render header component', () => {
    expect(wrapper.find('.header').exists()).toBeTruthy()
  })

  it('should show "Back to Movies" text when not in the root path', async () => {
    await wrapper.setData({ $route: { path: '/movie/123' } })
    expect(wrapper.find('.header__back-link').text()).toContain(
      'Back to Movies'
    )
  })

  it('should hide the "Back to Movies" link when on the root path', () => {
    expect(wrapper.find('.header__back-link').exists()).toBeFalsy()
  })

  it('should render back link arrow in tablet and mobile view', () => {
    const viewPorts = [760, 300]

    viewPorts.forEach(async (viewPort) => {
      await wrapper.setData({
        $route: { path: '/movie/123' },
        windowWidth: viewPort,
      })
      expect(
        wrapper.find('[data-cy="header__back-link--arrow"]').exists()
      ).toBeTruthy()
    })
  })

  it('should display the logo image', () => {
    expect(wrapper.find('.header__logo').exists()).toBeTruthy()
  })
})
