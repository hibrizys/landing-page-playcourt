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
});
