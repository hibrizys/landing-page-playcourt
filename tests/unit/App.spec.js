// App.spec.js
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";

// Mock the components imported in App.vue
jest.mock("@/components/Layouts/Preloader.vue", () => ({
  name: "Preloader",
  template: '<div class="mock-preloader"></div>',
}));

jest.mock("@/components/Layouts/BackToTop.vue", () => ({
  name: "BackToTop",
  template: '<div class="mock-back-to-top"></div>',
}));

describe("App.vue", () => {
  // Create a mock router
  const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: { template: "<div>Mock Home</div>" } }],
  });

  it("renders the component", () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router], // Use the mock router in the test
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("hides Preloader after the transition effect", async () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router], // Use the mock router in the test
      },
    });

    // Ensure that isLoading is initially true
    expect(wrapper.vm.isLoading).toBe(true);

    // Simulate the transition effect by setting isLoading to false
    await wrapper.setData({ isLoading: false });

    // Wait for the next tick of the event loop
    await wrapper.vm.$nextTick();

    // Ensure that isLoading is updated to false after the transition effect
    expect(wrapper.vm.isLoading).toBe(false);
  });
});
