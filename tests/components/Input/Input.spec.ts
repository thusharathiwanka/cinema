import { mount } from '@vue/test-utils'
import Input from '@/components/Input/Input.vue'

describe('Input.vue', () => {
  it('should render the input component label correctly', () => {
    const label = 'Test Label'
    const wrapper = mount(Input, {
      propsData: {
        label,
      },
    })

    expect(wrapper.find('.text-input__label').text()).toBe(label)
  })

  it('should sets the input value and emits an "input" event when input is triggered', async () => {
    const wrapper = mount(Input, {
      propsData: { value: 'Test Input Value' },
    })

    const inputElement = wrapper.find('.text-input__area')
      .element as HTMLInputElement
    expect(inputElement.value).toBe('Test Input Value')

    await wrapper.find('.text-input__area').setValue('New Input Value')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input?.[0]).toEqual(['New Input Value'])
  })

  it('should renders with the correct type attribute', () => {
    const variants = ['text', 'date', 'email', 'tel']

    variants.forEach((variant) => {
      const wrapper = mount(Input, {
        propsData: {
          variant,
        },
      })

      expect(wrapper.find('.text-input__area').attributes('type')).toBe(variant)
    })
  })
})
