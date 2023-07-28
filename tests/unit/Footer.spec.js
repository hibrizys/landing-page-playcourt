import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Layouts/Footer.vue";

// Mock the image import
jest.mock("@/assets/img/logo2.png", () => "logo2.png");
const wrapper = shallowMount(Footer);

describe("Footer.vue", () => {
  // Test the rendering of the component
  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test if the current year is displayed correctly
  it("displays the correct current year", () => {
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(currentYear.toString());
  });

  // Test if the footer logo image is rendered
  it("renders the footer logo image", () => {
    const logoImage = wrapper.find('img[alt="Logo"]');
    expect(logoImage.exists()).toBe(true);
    expect(logoImage.attributes("src")).toBe("logo2.png"); // Check the src attribute
  });

  // Test if footer social links are present
  it("renders the footer social links", () => {
    const socialLinks = wrapper.findAll(".footer-social a");
    expect(socialLinks.length).toBe(4);
  });

  // Test if footer navigation links are present
  it("renders the footer navigation links", () => {
    const navigationLinks = wrapper.findAll(".quick-link a");
    expect(navigationLinks.length).toBe(9);
  });

    // Test if footer navigation links Address Info are present
    it("renders the footer navigation links Address Info", () => {
      const addressLinks = wrapper.findAll(".address-info a");
      expect(addressLinks.length).toBe(3);
    });

});
