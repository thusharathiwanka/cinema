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
      propsData: { type: 'primary' },
      slots: { default: 'Primary Button' },
    })

    expect(wrapper.find('.button.button--primary').text()).toContain(
      'Primary Button'
    )
  })

  it('should render secondary button component with given text', () => {
    const wrapper = mount(Button, {
      propsData: { type: 'secondary' },
      slots: { default: 'Secondary Button' },
    })

    expect(wrapper.find('.button.button--secondary').text()).toContain(
      'Secondary Button'
    )
  })

  it('calls the onClick function when the button is clicked', async () => {
    const onClickMock = jest.fn()
    const wrapper = mount(Button, {
      propsData: {
        onClick: onClickMock,
      },
      slots: {
        default: 'Click',
      },
    })

    await wrapper.find('.button.button--primary').trigger('click')

    expect(onClickMock).toHaveBeenCalled()
  })
})
