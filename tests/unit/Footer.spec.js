import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Layouts/Footer.vue";

// Mock the image import
jest.mock("@/assets/img/logo2.png", () => "logo2.png");
const wrapper = shallowMount(Footer);

describe("Footer.vue", () => {
  // Test the rendering of the component
  test("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test if the current year is displayed correctly
  test("displays the correct current year", () => {
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(currentYear.toString());
  });

  // Test if the footer logo image is rendered
  test("renders the footer logo image", () => {
    const logoImage = wrapper.find('img[alt="Logo"]');
    expect(logoImage.exists()).toBe(true);
    expect(logoImage.attributes("src")).toBe("logo2.png"); // Check the src attribute
  });

  // Test if footer social links are present
  test("renders the footer social links", () => {
    const socialLinks = wrapper.findAll(".footer-social a");
    expect(socialLinks.length).toBe(4);
  });

  // Test if footer navigation links are present
  test("renders the footer navigation links", () => {
    const navigationLinks = wrapper.findAll(".quick-link a");
    expect(navigationLinks.length).toBe(9);
  });

  // Test if footer navigation links Address Info are present
  test("renders the footer navigation links Address Info", () => {
    const addressLinks = wrapper.findAll(".address-info a");
    expect(addressLinks.length).toBe(3);
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

  // Test if the mounted hook attaches the scroll event listener
  test("mounted hook attaches the scroll event listener", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    wrapper.vm.$options.mounted.call(wrapper.vm);
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
    addEventListenerSpy.mockRestore();
  });

  // Test if the mounted hook sets the isSticky property correctly
  test("mounted hook sets the isSticky property correctly", () => {
    const scrollEvent = new Event("scroll");
    const scrollYBefore = window.scrollY;
    window.scrollY = 200;
    window.dispatchEvent(scrollEvent);

    // Wait for next tick for the scroll event to be processed
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.isSticky).toBe(true);

      // Restore the original scrollY value
      window.scrollY = scrollYBefore;
    });
  });

  // Test if scroll method does not throw an error when element is not found
  test("scroll method does not throw an error when element is not found", () => {
    // Mock the document.getElementById method to return null
    jest.spyOn(document, "getElementById").mockReturnValue(null);

    // Expect the scroll method not to throw an error
    expect(() => wrapper.vm.scroll("nonExistentElement")).not.toThrow();
  });

  // Test if the mounted hook sets the isSticky property correctly when scroll position is less than 100
  test("mounted hook sets the isSticky property correctly when scroll position is less than 100", () => {
    const scrollEvent = new Event("scroll");
    const scrollYBefore = window.scrollY;
    window.scrollY = 50;
    window.dispatchEvent(scrollEvent);

    // Wait for next tick for the scroll event to be processed
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.isSticky).toBe(false);

      // Restore the original scrollY value
      window.scrollY = scrollYBefore;
    });
  });

  // Test if the mounted hook sets the isSticky property correctly when scroll position is greater than or equal to 100
  test("mounted hook sets the isSticky property correctly when scroll position is greater than or equal to 100", () => {
    const scrollEvent = new Event("scroll");
    const scrollYBefore = window.scrollY;
    window.scrollY = 200;
    window.dispatchEvent(scrollEvent);

    // Wait for next tick for the scroll event to be processed
    return wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.isSticky).toBe(true);

      // Restore the original scrollY value
      window.scrollY = scrollYBefore;
    });
  });

  // Test if footer navigation links navigate to the correct sections
  test("footer navigation links navigate to the correct sections", () => {
    // Mock the scroll method to be able to check if it's called with the correct parameters
    const scrollMock = jest.spyOn(wrapper.vm, "scroll");

    // Find all the navigation links
    const navigationLinks = wrapper.findAll(".quick-link a");

    // Check if navigationLinks is not empty
    expect(navigationLinks.length).toBeGreaterThan(0);

    // Iterate through each link and check if it navigates to the correct section
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
});
