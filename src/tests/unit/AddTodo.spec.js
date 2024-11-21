import { mount } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'

describe('AddTodo.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(AddTodo)
    expect(wrapper.exists()).toBe(true)
  })
})
