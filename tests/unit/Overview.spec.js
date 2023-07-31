import { shallowMount } from "@vue/test-utils";
import Overview from "@/components/Overview.vue"; 

const wrapper = shallowMount(Overview);

describe("Overview.vue", () => {
  test("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders the correct sub-title", () => {
    const subTitle = wrapper.find(".sub-title").text();
    expect(subTitle).toBe("Reliable cloud computing platform");
  });

  test("renders the correct main title", () => {
    const mainTitle = wrapper.find("h1").text();
    expect(mainTitle).toBe("Easily Deploy And Scale Your Apps");
  });

  test("renders the correct description", () => {
    const description = wrapper.find("p").text();
    expect(description).toBe(
      "PlayCourt is a comprehensive application development platform specifically designed for the development of Telkom Indonesia's digital products."
    );
  });

  test('renders the "Order Now" button with the correct link', () => {
    const button = wrapper.find("a.main-default-btn");
    expect(button.exists()).toBe(true);
    expect(button.attributes("href")).toBe(
      "https://dashboard.playcourt.id/login"
    );
  });

  test("Check that the specific image exists", () => {
    const img = wrapper.findAll('.Overview2');
    expect(img.length).toBe(1);
  });
});
