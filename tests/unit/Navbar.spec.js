import { mount } from "@vue/test-utils";
import Navbar from "@/components/Layouts/Navbar.vue";
import router from "@/router";

// Mock the window.scrollTo method
window.scrollTo = jest.fn();

const wrapper = mount(Navbar, {
  global: {
    plugins: [router], // Add the Vue Router plugin here
  },
});
describe("Navbar", () => {
  it("renders correctly", () => {
    // Assert that the component renders without errors
    expect(wrapper.exists()).toBe(true);

    // Assert that the component contains the navbar brand with the image
    expect(wrapper.find(".navbar-brand img").exists()).toBe(true);

    // Assert that the component contains the correct number of navigation links
    expect(wrapper.findAll(".navbar-nav li")).toHaveLength(4);

    // Assert that the component contains the side navigation links
    expect(wrapper.find(".side-nav .log-in").exists()).toBe(true);
    expect(wrapper.find(".side-nav .sign-up").exists()).toBe(true);
  });

  it("toggles the mobile navigation menu", async () => {
    // The mobile menu should be initially closed
    expect(wrapper.find(".collapse").classes("toggler")).toBe(false);

    // Simulate clicking the navbar toggler
    await wrapper.find(".navbar-toggler").trigger("click");

    // The mobile menu should be open after clicking the toggler
    expect(wrapper.find(".collapse").classes("toggler")).toBe(true);

    // Simulate clicking the navbar toggler again
    await wrapper.find(".navbar-toggler").trigger("click");

    // The mobile menu should be closed again
    expect(wrapper.find(".collapse").classes("toggler")).toBe(false);
  });

  it("initial value of isSticky should be false", () => {
    expect(wrapper.vm.isSticky).toBe(false);
  });

  it("initial value of active should be false", () => {
    expect(wrapper.vm.active).toBe(false);
  });

  it("initial value of button_active_state should be false", () => {
    expect(wrapper.vm.button_active_state).toBe(false);
  });
});
