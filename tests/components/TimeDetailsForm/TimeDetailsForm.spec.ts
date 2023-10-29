import { mount } from '@vue/test-utils'
import TimeDetailsForm from '@/components/TimeDetailsForm/TimeDetailsForm.vue'
import Input from '@/components/Input/Input.vue'

describe('TimeDetailsForm.vue', () => {
  it('should render the Input component with labels', () => {
    const wrapper = mount(TimeDetailsForm, {
      mocks: { $route: { params: { id: '' } } },
    })

    const dateInput = wrapper.findComponent(Input)
    expect(dateInput.exists()).toBe(true)
    expect(dateInput.props('label')).toBe('Select Date*')
    expect(dateInput.props('variant')).toBe('date')
  })

  it('two-way binds data properties to the Input components', async () => {
    const wrapper = mount(TimeDetailsForm, {
      mocks: { $route: { params: { id: '' } } },
    })

    await wrapper.setData({
      bookedDate: '2023-10-10',
    })

    const dateInput = wrapper.findComponent(Input)
    expect(dateInput.props('value')).toBe('2023-10-10')
  })
})
