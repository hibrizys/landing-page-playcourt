import { shallowMount } from "@vue/test-utils";
import BackToTop from "@/components/Layouts/BackToTop.vue";

const wrapper = shallowMount(BackToTop);

describe("BackToTop.vue", () => {
  // Test the rendering of the component
  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test if the back-to-top button triggers scroll to the top
  it("scrolls to the top when clicked", () => {
    // Mock the scrollTo method of window object
    window.scrollTo = jest.fn();

    const backToTopButton = wrapper.find(".back-to-top-btn");

    // Set scroll position to 200 to simulate scrolling down
    window.scrollY = 200;

    // Trigger click on back-to-top button
    backToTopButton.trigger("click");

    // Expect scrollTo method to be called with (0, 0)
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
