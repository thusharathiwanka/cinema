import { mount } from '@vue/test-utils'
import TimeDetailsForm from '@/components/TimeDetailsForm/TimeDetailsForm.vue'
import Input from '@/components/Input/Input.vue'
import SelectInput from '@/components/SelectInput/SelectInput.vue'

describe('TimeDetailsForm.vue', () => {
  it('should render the Input and SelectInput components with labels', () => {
    const wrapper = mount(TimeDetailsForm)

    const dateInput = wrapper.findComponent(Input)
    expect(dateInput.exists()).toBe(true)
    expect(dateInput.props('label')).toBe('Select Date')
    expect(dateInput.props('type')).toBe('date')

    const timeInput = wrapper.findComponent(SelectInput)
    expect(timeInput.exists()).toBe(true)
    expect(timeInput.props('label')).toBe('Select Time')
    expect(timeInput.props('options')).toEqual(wrapper.vm.$data.options)
  })

  it('two-way binds data properties to the Input and SelectInput components', async () => {
    const wrapper = mount(TimeDetailsForm)

    await wrapper.setData({
      bookedDate: '2023-10-10',
      bookedTime: '1:30 PM',
    })

    const dateInput = wrapper.findComponent(Input)
    expect(dateInput.props('value')).toBe('2023-10-10')

    const timeInput = wrapper.findComponent(SelectInput)
    expect(timeInput.props('value')).toBe('1:30 PM')
  })
})
