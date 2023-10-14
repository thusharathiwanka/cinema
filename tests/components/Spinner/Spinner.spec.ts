import { mount } from '@vue/test-utils'
import Spinner from '@/components/Spinner/Spinner.vue'

describe('Spinner.vue', () => {
  it('should render spinner component', () => {
    const wrapper = mount(Spinner)

    expect(wrapper.find('.spinner').exists()).toBeTruthy()
  })
})
