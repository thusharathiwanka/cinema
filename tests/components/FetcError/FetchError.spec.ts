import { mount } from '@vue/test-utils'
import FetchError from '@/components/FetchError/FetchError.vue'

describe('FetchError.vue', () => {
  it('should renders error message when error is provided', () => {
    const errorMessage = 'This is an error message'
    const wrapper = mount(FetchError, {
      propsData: {
        error: { message: errorMessage },
      },
    })

    expect(
      wrapper.findComponent({ name: 'TypographyComponent' }).text()
    ).toContain(errorMessage)
  })

  it('should not render error message when error is not provided', () => {
    const wrapper = mount(FetchError, { propsData: {} })

    expect(wrapper.find('.fetch-error').exists()).toBe(false)
  })

  it('should renders child content in the slot', () => {
    const slotContent = '<p>Some content in the slot</p>'
    const wrapper = mount(FetchError, {
      slots: {
        default: slotContent,
      },
      propsData: {
        error: { message: 'Error' },
      },
    })

    expect(wrapper.html()).toContain(slotContent)
  })
})
