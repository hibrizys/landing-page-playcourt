// Preloader.spec.js
import { shallowMount } from '@vue/test-utils';
import Preloader from '@/components/Layouts/Preloader.vue';

describe('Preloader.vue', () => {
  test('renders the Preloader component', () => {
    // Mount the component
    const wrapper = shallowMount(Preloader);

    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });
});
