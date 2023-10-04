import { mount } from '@vue/test-utils'
import Header from '@/components/Header/Header.vue'

describe('Header.vue', () => {
  it('should render header component', () => {
    const $route = {
      path: '',
    }
    const wrapper = mount(Header, {
      mocks: {
        $route,
      },
      stubs: ['nuxt-link'],
    })

    expect(wrapper.find('.header').exists()).toBeTruthy()
  })

  it('should contain "Back to Movies" text', () => {
    const $route = {
      path: '/movies/123',
    }

    const wrapper = mount(Header, {
      mocks: {
        $route,
      },
      stubs: ['nuxt-link'],
    })

    expect(wrapper.find('.header__back-link').text()).toContain(
      'Back to Movies'
    )
  })

  it('should display the "Back to Movies" link when not on the root path', () => {
    const $route = {
      path: '/movies/123',
    }

    const wrapper = mount(Header, {
      mocks: {
        $route,
      },
      stubs: ['nuxt-link'],
    })

    expect(wrapper.find('.header__back-link').exists()).toBeTruthy()
  })

  it('should hide the "Back to Movies" link when on the root path', () => {
    const $route = {
      path: '/',
    }

    const wrapper = mount(Header, {
      mocks: {
        $route,
      },
    })

    expect(wrapper.find('.header__back-link').exists()).toBeFalsy()
  })

  it('should display the logo image', () => {
    const $route = {
      path: '',
    }

    const wrapper = mount(Header, {
      mocks: {
        $route,
      },
      stubs: ['nuxt-link'],
    })

    expect(wrapper.find('.header__logo').exists()).toBeTruthy()
  })
})
