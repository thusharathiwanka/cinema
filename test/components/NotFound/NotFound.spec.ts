import { mount } from '@vue/test-utils'
import NotFound from '@/components/NotFound/NotFound.vue'

describe('NotFound.vue', () => {
  it('should renders not found component with default props', () => {
    const wrapper = mount(NotFound)

    expect(wrapper.find('.not-found').exists()).toBeTruthy()
    expect(wrapper.find('h1').text()).toContain('404')
    expect(wrapper.find('h2').text()).toBe(
      'We couldn’t find the page that you are looking for'
    )
    expect(wrapper.find('nuxt-link').attributes('to')).toBe('/')
  })

  it('should renders not found component with custom props', () => {
    const customProps = {
      title: 'Custom 404',
      subtitle: 'Custom subtitle',
      link: '/custom-link',
    }

    const wrapper = mount(NotFound, {
      propsData: customProps,
    })

    expect(wrapper.find('.not-found').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toContain(customProps.title)
    expect(wrapper.find('h2').text()).toBe(customProps.subtitle)
    expect(wrapper.find('nuxt-link').attributes('to')).toBe(customProps.link)
  })
})
