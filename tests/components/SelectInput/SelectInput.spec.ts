import { mount } from '@vue/test-utils'
import SelectInput from '@/components/SelectInput/SelectInput.vue'

describe('SelectInputComponent.vue', () => {
  it('should render the label correctly', () => {
    const label = 'Test Label'
    const wrapper = mount(SelectInput, {
      propsData: {
        label,
      },
    })

    expect(wrapper.find('.text-input__label').text()).toBe(label)
  })

  it('should render options correctly', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]
    const wrapper = mount(SelectInput, {
      propsData: {
        options,
      },
    })

    const optionElements = wrapper.findAll('option')
    expect(optionElements.length).toBe(options.length)

    optionElements.wrappers.forEach((optionElement, index) => {
      expect(optionElement.text()).toBe(options[index].label)
      expect(optionElement.attributes('value')).toBe(options[index].value)
    })
  })

  it('should set the selected value and emits an "input" event when option is changed', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]
    const wrapper = mount(SelectInput, {
      propsData: {
        options,
      },
    })

    const selectedValue = 'option2'
    await wrapper.setData({ selectedValue })

    const selectElement = wrapper.find('.select-input__area')
      .element as HTMLSelectElement
    expect(selectElement.value).toBe(selectedValue)

    await wrapper.find('.select-input__area').trigger('change')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input?.[0]).toEqual([selectedValue])
  })
})
