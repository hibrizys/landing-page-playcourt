import { shallowMount } from "@vue/test-utils";
import Steps from "@/components/Steps.vue"; 

const wrapper = shallowMount(Steps);

describe("Steps.vue", () => {
  test("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders the correct main title", () => {
    const mainTitle = wrapper.find("h2").text();
    expect(mainTitle).toBe("Easy Step To Start Your Project");
  });

  test("renders three accordion items", () => {
    const accordionItems = wrapper.findAll(".accordion-item");
    expect(accordionItems).toHaveLength(3);
  });

  test("expands the first accordion item by default", () => {
    const firstAccordionItem = wrapper.find("#collapseOne");
    expect(firstAccordionItem.attributes("class")).toContain("show");
  });

  test("changes the expanded second accordion item when clicked", async () => {
    const secondAccordionButton = wrapper.find(
      '[data-bs-target="#collapseTwo"]'
    );
    const secondAccordionItem = wrapper.find("#collapseTwo");

    // Simulate a click on the second accordion button
    await secondAccordionButton.trigger("click");

    // After the click, the second accordion item should be expanded
    expect(secondAccordionItem.isVisible()).toBe(true);
  });

  test("changes the expanded third accordion item when clicked", async () => {
    const thirdAccordionButton = wrapper.find(
      '[data-bs-target="#collapseThree"]'
    );
    const thirdAccordionItem = wrapper.find("#collapseThree");

    // Simulate a click on the third accordion button
    await thirdAccordionButton.trigger("click");

    // After the click, the second accordion item should be expanded
    expect(thirdAccordionItem.isVisible()).toBe(true);
  });
});
