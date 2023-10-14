import { mount } from '@vue/test-utils'
import PersonalDetailsForm from '@/components/PersonalDetailsForm/PersonalDetailsForm.vue'
import Input from '@/components/Input/Input.vue'

describe('PersonalDetailsForm.vue', () => {
  it('should render the input fields with labels', () => {
    const wrapper = mount(PersonalDetailsForm)
    const inputComponents = wrapper.findAllComponents(Input)

    expect(inputComponents.length).toBe(3)

    const labels = inputComponents.wrappers.map((input) =>
      input.find('label').text()
    )

    expect(labels).toEqual(['Your Name', 'Your Email', 'Your Mobile Number'])
  })

  it('should two-way binds data properties to the Input components', async () => {
    const wrapper = mount(PersonalDetailsForm)

    await wrapper.setData({
      name: 'John Doe',
      email: 'johndoe@example.com',
      mobileNumber: '1234567890',
    })

    const inputComponents = wrapper.findAllComponents(Input)

    expect(inputComponents.at(0).props('value')).toBe('John Doe')
    expect(inputComponents.at(1).props('value')).toBe('johndoe@example.com')
    expect(inputComponents.at(2).props('value')).toBe('1234567890')

    expect(wrapper.vm.$data.name).toBe('John Doe')
    expect(wrapper.vm.$data.email).toBe('johndoe@example.com')
    expect(wrapper.vm.$data.mobileNumber).toBe('1234567890')
  })
})
