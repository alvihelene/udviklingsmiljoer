import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome.vue', () => {
  it('renders WelcomeItem component', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.findComponent({ name: 'WelcomeItem' })).toBeTruthy()
  })

  it('renders DocumentationIcon', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.findComponent({ name: 'DocumentationIcon' })).toBeTruthy()
  })

  it('contains link to Vue documentation', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.html()).toContain('https://vuejs.org/')
  })
})
