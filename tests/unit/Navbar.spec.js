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
  test("renders correctly", () => {
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

  test("toggles the mobile navigation menu", async () => {
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

  test("initial value of isSticky should be false", () => {
    expect(wrapper.vm.isSticky).toBe(false);
  });

  test("initial value of active should be false", () => {
    expect(wrapper.vm.active).toBe(false);
  });

  test("initial value of button_active_state should be false", () => {
    expect(wrapper.vm.button_active_state).toBe(false);
  });

  // Test if navbar navigation links trigger the scroll method correctly
  test("navbar navigation links trigger the scroll method correctly", () => {
    // Mock the scroll method to be able to check if it's called with the correct parameters
    const scrollMock = jest.spyOn(wrapper.vm, "scroll");

    // Find all the navigation links
    const navigationLinks = wrapper.findAll(".navbar-nav .nav-item .nav-link ");

    // Check if navigationLinks is not empty
    expect(navigationLinks.length).toBeGreaterThan(0);

    // Iterate through each link and check if it triggers the scroll method with the correct section
    navigationLinks.forEach((linkWrapper) => {
      linkWrapper.text(); // Get the section name from the link text
      linkWrapper.trigger("click"); // Trigger a click on the link
      expect(scrollMock).toHaveBeenCalledWith("Overview"); // Expect the scroll method to have been called with the correct section
    });

    navigationLinks.forEach((linkWrapper) => {
      linkWrapper.text(); // Get the section name from the link text
      linkWrapper.trigger("click"); // Trigger a click on the link
      expect(scrollMock).toHaveBeenCalledWith("Features"); // Expect the scroll method to have been called with the correct section
    });

    navigationLinks.forEach((linkWrapper) => {
      linkWrapper.text(); // Get the section name from the link text
      linkWrapper.trigger("click"); // Trigger a click on the link
      expect(scrollMock).toHaveBeenCalledWith("Steps"); // Expect the scroll method to have been called with the correct section
    });

    navigationLinks.forEach((linkWrapper) => {
      linkWrapper.text(); // Get the section name from the link text
      linkWrapper.trigger("click"); // Trigger a click on the link
      expect(scrollMock).toHaveBeenCalledWith("Order"); // Expect the scroll method to have been called with the correct section
    });

    // Restore the scroll method mock
    scrollMock.mockRestore();
  });

  // Test if the 'mounted' hook sets the 'isSticky' property correctly
  test("mounted hook sets the isSticky property correctly", () => {
    // Set the initial scrollY value and trigger a scroll event
    window.scrollY = 0;
    window.dispatchEvent(new Event("scroll"));

    // Wait for the next tick for the scroll event to be processed
    return wrapper.vm.$nextTick().then(() => {
      // Expect 'isSticky' to be false since scrollY is 0
      expect(wrapper.vm.isSticky).toBe(false);

      // Set the scrollY value to 200 and trigger another scroll event
      window.scrollY = 200;
      window.dispatchEvent(new Event("scroll"));

      // Wait for the next tick for the scroll event to be processed
      return wrapper.vm.$nextTick().then(() => {
        // Expect 'isSticky' to be true since scrollY is 200
        expect(wrapper.vm.isSticky).toBe(true);
      });
    });
  });

  // Test if scroll method scrolls to the correct element
  test("scroll method scrolls to the correct element", () => {
    // Create a dummy element with the scrollIntoView mock function
    const mockScrollIntoView = jest.fn();
    const dummyElement = {
      scrollIntoView: mockScrollIntoView,
    };
    // Mock the document.getElementById method to return the dummy element
    jest.spyOn(document, "getElementById").mockReturnValue(dummyElement);

    // Call the scroll method
    wrapper.vm.scroll("Overview");

    // Expect the scrollIntoView method to have been called with the smooth behavior
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    // Call the scroll method
    wrapper.vm.scroll("Features");

    // Expect the scrollIntoView method to have been called with the smooth behavior
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    // Call the scroll method
    wrapper.vm.scroll("Steps");

    // Expect the scrollIntoView method to have been called with the smooth behavior
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    // Call the scroll method
    wrapper.vm.scroll("Order");

    // Expect the scrollIntoView method to have been called with the smooth behavior
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
