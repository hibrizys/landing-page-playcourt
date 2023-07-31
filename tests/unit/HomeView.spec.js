import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue"; 

const wrapper = shallowMount(HomeView);

describe("HomeView.vue", () => {
  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Navbar component", () => {
    expect(wrapper.findComponent({ name: "Navbar" }).exists()).toBe(true);
  });

  it("renders the Overview component", () => {
    expect(wrapper.findComponent({ name: "Overview" }).exists()).toBe(true);
  });

  it("renders the Features component", () => {
    expect(wrapper.findComponent({ name: "Features" }).exists()).toBe(true);
  });

  it("renders the Steps component", () => {
    expect(wrapper.findComponent({ name: "Steps" }).exists()).toBe(true);
  });

  it("renders the Order component", () => {
    expect(wrapper.findComponent({ name: "Order" }).exists()).toBe(true);
  });

  it("renders the Footer component", () => {
    expect(wrapper.findComponent({ name: "Footer" }).exists()).toBe(true);
  });
});
