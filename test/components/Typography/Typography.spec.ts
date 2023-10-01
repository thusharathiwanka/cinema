import { mount } from '@vue/test-utils'
import Typography from '@/components/Typography/Typography.vue'

describe('Typography.vue', () => {
  it('should render typography component inside <p></p> with given text', () => {
    const wrapper = mount(Typography, { slots: { default: 'Typography' } })

    expect(wrapper.find('p').text()).toContain('Typography')
  })

  it('should render typography component inside <h1></h1> with given text', () => {
    const wrapper = mount(Typography, {
      propsData: { type: 'h1' },
      slots: { default: 'Typography' },
    })

    expect(wrapper.find('h1').text()).toContain('Typography')
  })

  it('should render typography component inside <h2></h2> with given text', () => {
    const wrapper = mount(Typography, {
      propsData: { type: 'h2' },
      slots: { default: 'Typography' },
    })

    expect(wrapper.find('h2').text()).toContain('Typography')
  })

  it('should render typography component and truncate', () => {
    const wrapper = mount(Typography, {
      propsData: { type: 'h2', truncate: true },
      slots: { default: 'Typography' },
    })

    expect(wrapper.find('.typography--subtitle.truncate').exists()).toBeTruthy()
  })
})
