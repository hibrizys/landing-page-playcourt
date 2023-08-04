import { mount } from "@vue/test-utils";
import Order from "@/components/Order.vue";

describe("Order", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Order);
  });
  test("renders correctly", () => {
    // Assert that the component renders without errors
    expect(wrapper.exists()).toBe(true);

    // Assert that the component contains the correct section title
    expect(wrapper.find(".sub-title").text()).toBe("# CHOOSE YOUR SERVICE");
    expect(wrapper.find("h2").text()).toBe(
      "Nearly We Have Been Trying To Provide Those"
    );
    // Assert that the component contains two feature items
    const featureItems = wrapper.findAll(".why-choose-us-item");
    expect(featureItems).toHaveLength(2);

    // Assert the content of the first feature item (Amazon Web Services)
    const firstFeature = featureItems[0];
    expect(firstFeature.find("h3").text()).toBe("Amazon Web Services");
    expect(firstFeature.findAll(".list li")).toHaveLength(3);
    expect(firstFeature.find(".choose-btn").attributes("href")).toBe(
      "https://dashboard.playcourt.id/login"
    );

    // Assert the content of the second feature item (RedHat Openshift)
    const secondFeature = featureItems[1];
    expect(secondFeature.find("h3").text()).toBe("RedHat Openshift");
    expect(secondFeature.findAll(".list li")).toHaveLength(3);
    expect(secondFeature.find(".slider").exists()).toBe(true);
    expect(secondFeature.find(".form-group select").exists()).toBe(true);
    expect(secondFeature.find(".choose-btn").attributes("href")).toBe(
      "https://dashboard.playcourt.id/login"
    );

    // Additional test: Check if the slider component exists
    expect(wrapper.findComponent({ name: "vueSlider" }).exists()).toBe(true);

    // Additional test: Check if the select box contains the correct number of options
    const selectOptions = wrapper.findAll(".select-box select option");
    expect(selectOptions).toHaveLength(4); // Including the default option

    // Additional test: Check the text of the options in the select box
    expect(selectOptions[0].text()).toBe("Select database storage");
    expect(selectOptions[1].text()).toBe("25GB");
    expect(selectOptions[2].text()).toBe("50GB");
    expect(selectOptions[3].text()).toBe("100GB");
  });

  test("should render content for demo.value1 = 1", async () => {
    wrapper.setData({ demo: { value1: "1" } });

    // Wait for the next tick to ensure Vue has re-rendered the component
    await wrapper.vm.$nextTick();

    // Find the div with class "list" that should be displayed when demo.value1 is 1
    const listDiv = wrapper.find(
      ".choose-content div[data-test='content-for-value1']"
    );

    // Assert that the div with class "list" exists
    expect(listDiv.exists()).toBe(true);
  });

  test("should render content for demo.value1 = 2", async () => {
    wrapper.setData({ demo: { value1: "2" } });

    // Wait for the next tick to ensure Vue has re-rendered the component
    await wrapper.vm.$nextTick();

    // Find the div with class "list" that should be displayed when demo.value1 is 1
    const listDiv = wrapper.find(
      ".choose-content div[data-test='content-for-value2']"
    );

    // Assert that the div with class "list" exists
    expect(listDiv.exists()).toBe(true);
  });

  test("should render content for demo.value1 = 3", async () => {
    wrapper.setData({ demo: { value1: "3" } });

    // Wait for the next tick to ensure Vue has re-rendered the component
    await wrapper.vm.$nextTick();

    // Find the div with class "list" that should be displayed when demo.value1 is 1
    const listDiv = wrapper.find(
      ".choose-content div[data-test='content-for-value3']"
    );

    // Assert that the div with class "list" exists
    expect(listDiv.exists()).toBe(true);
  });

  test("should render content for demo.value1 = 4", async () => {
    wrapper.setData({ demo: { value1: "4" } });

    // Wait for the next tick to ensure Vue has re-rendered the component
    await wrapper.vm.$nextTick();

    // Find the div with class "list" that should be displayed when demo.value1 is 1
    const listDiv = wrapper.find(
      ".choose-content div[data-test='content-for-value4']"
    );

    // Assert that the div with class "list" exists
    expect(listDiv.exists()).toBe(true);
  });

  test("should render content for demo.value1 = 5", async () => {
    wrapper.setData({ demo: { value1: "5" } });

    // Wait for the next tick to ensure Vue has re-rendered the component
    await wrapper.vm.$nextTick();

    // Find the div with class "list" that should be displayed when demo.value1 is 1
    const listDiv = wrapper.find(
      ".choose-content div[data-test='content-for-value5']"
    );

    // Assert that the div with class "list" exists
    expect(listDiv.exists()).toBe(true);
  });

  test("selects the default option in the database storage select box", () => {
    const selectBox = wrapper.find(".select-box select");

    // Assert that the default option is selected
    expect(selectBox.element.value).toBe("");

    // Assert that the default option text is "Select database storage"
    expect(selectBox.find("option").text()).toBe("Select database storage");
  });

  test("updates the database storage select box value when an option is selected", async () => {
    const selectBox = wrapper.find(".select-box select");

    // Select an option with value "25"
    await selectBox.setValue("25");

    // Assert that the selected value is updated to "25"
    expect(selectBox.element.value).toBe("25");

    // Select an option with value "50"
    await selectBox.setValue("50");

    // Assert that the selected value is updated to "50"
    expect(selectBox.element.value).toBe("50");

    // Select another option with value "100"
    await selectBox.setValue("100");

    // Assert that the selected value is updated to "100"
    expect(selectBox.element.value).toBe("100");
  });

  test('should call the "Order Now" button link correctly', () => {
    const orderButton = wrapper.find(".choose-btn");

    // Assert that the "Order Now" button has the correct link
    expect(orderButton.attributes("href")).toBe(
      "https://dashboard.playcourt.id/login"
    );
  });
  test("should contain the 'row justify-content-center' div and its children", () => {
    // Find the 'row justify-content-center' div
    const rowDiv = wrapper.find(".row.justify-content-center");

    // Assert that the 'row justify-content-center' div exists
    expect(rowDiv.exists()).toBe(true);

    // Find the 'col-lg-4 col-md-6' divs inside the 'row justify-content-center'
    const colDivs = rowDiv.findAll(".col-lg-4.col-md-6");

    // Assert that there are two 'col-lg-4 col-md-6' divs
    expect(colDivs).toHaveLength(2);
  });

  test("does not update the selected value when selecting the default option", async () => {
    // Find the select element
    const selectBox = wrapper.find("[data-testid='database-storage-select']");

    // Select the default option
    await selectBox.setValue("");

    // Wait for the next tick to ensure Vue has re-rendered the component
    await wrapper.vm.$nextTick();

    // Get the selected value of the select element
    const selectedValue = selectBox.element.value;

    // Assert that the selected value remains the same as the default (empty string)
    expect(selectedValue).toBe("");
  });
  test("has correct initial data", () => {
    // Check the initial value of demo.value1
    expect(wrapper.vm.demo.value1).toBe("0");
  });
});
