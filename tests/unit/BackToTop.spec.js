import { shallowMount } from "@vue/test-utils";
import BackToTop from "@/components/Layouts/BackToTop.vue";

const wrapper = shallowMount(BackToTop);

describe("BackToTop.vue", () => {
  // Test the rendering of the component
  test("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test if the back-to-top button triggers scroll to the top
  test("scrolls to the top when clicked", () => {
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

  // Test if the 'mounted' hook sets the 'isTop' property correctly
  test("mounted hook sets the isTop property correctly", () => {
    // Set the initial scrollY value and trigger a scroll event
    window.scrollY = 0;
    window.dispatchEvent(new Event("scroll"));

    // Wait for the next tick for the scroll event to be processed
    return wrapper.vm.$nextTick().then(() => {
      // Expect 'isTop' to be false since scrollY is 0
      expect(wrapper.vm.isTop).toBe(false);

      // Set the scrollY value to 200 and trigger another scroll event
      window.scrollY = 200;
      window.dispatchEvent(new Event("scroll"));

      // Wait for the next tick for the scroll event to be processed
      return wrapper.vm.$nextTick().then(() => {
        // Expect 'isTop' to be true since scrollY is 200
        expect(wrapper.vm.isTop).toBe(true);
      });
    });
  });
});
