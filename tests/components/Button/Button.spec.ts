import { mount } from '@vue/test-utils'
import Button from '@/components/Button/Button.vue'

describe('Button.vue', () => {
  it('should render primary button component with given text', () => {
    const wrapper = mount(Button, { slots: { default: 'Primary Button' } })

    expect(wrapper.find('.button.button--primary').text()).toContain(
      'Primary Button'
    )
  })

  it('should render primary button component with given text', () => {
    const wrapper = mount(Button, {
      propsData: { variant: 'primary' },
      slots: { default: 'Primary Button' },
    })

    expect(wrapper.find('.button.button--primary').text()).toContain(
      'Primary Button'
    )
  })

  it('should render secondary button component with given text', () => {
    const wrapper = mount(Button, {
      propsData: { variant: 'secondary' },
      slots: { default: 'Secondary Button' },
    })

    expect(wrapper.find('.button.button--secondary').text()).toContain(
      'Secondary Button'
    )
  })

  it('should emits a "click" event when clicked', async () => {
    const wrapper = mount(Button)

    await wrapper.trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
