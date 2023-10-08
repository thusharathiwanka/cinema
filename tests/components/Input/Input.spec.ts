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
    const wrapper = mount(Input)
    const inputValue = 'Test Input Value'

    await wrapper.setData({ value: inputValue })
    const inputElement = wrapper.find('.text-input__area')
      .element as HTMLInputElement
    expect(inputElement.value).toBe(inputValue)

    await wrapper.find('.text-input__area').setValue('New Input Value')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input?.[0]).toEqual(['New Input Value'])
  })

  it('should renders with the correct type attribute', () => {
    const types = ['text', 'date', 'email', 'tel']

    types.forEach((type) => {
      const wrapper = mount(Input, {
        propsData: {
          type,
        },
      })

      expect(wrapper.find('.text-input__area').attributes('type')).toBe(type)
    })
  })
})
