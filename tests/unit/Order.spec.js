import { mount } from "@vue/test-utils";
import Order from "@/components/Order.vue"; // Replace with the actual path to Order.vue

const wrapper = mount(Order);

describe("Order", () => {
  it("renders correctly", () => {
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

  it("selects the default option in the database storage select box", () => {
    const selectBox = wrapper.find(".select-box select");

    // Assert that the default option is selected
    expect(selectBox.element.value).toBe("Default");
  });

  it("updates the database storage select box value when an option is selected", async () => {
    const selectBox = wrapper.find(".select-box select");

    // Select an option with value "25"
    await selectBox.setValue("25");

    // Assert that the selected value is updated to "25"
    expect(selectBox.element.value).toBe("25");

    // Select another option with value "100"
    await selectBox.setValue("100");

    // Assert that the selected value is updated to "100"
    expect(selectBox.element.value).toBe("100");
  });

  it("displays the correct information for the Amazon Web Services feature item", () => {
    const awsFeature = wrapper.findAll(".why-choose-us-item")[0];

    expect(awsFeature.find("h3").text()).toBe("Amazon Web Services");
    expect(awsFeature.findAll(".list li")).toHaveLength(3);

    // Check the text of each list item
    const listItems = awsFeature.findAll(".list li");
    expect(listItems[0].text()).toBe("Free Amazon AWS usage");
    expect(listItems[1].text()).toBe("Limited time offer");
    expect(listItems[2].text()).toBe("Get your access today");

    // Check the "Order Now" button link
    expect(awsFeature.find(".choose-btn").attributes("href")).toBe(
      "https://dashboard.playcourt.id/login"
    );
  });

  it("selects the default option in the database storage select box", () => {
    const wrapper = mount(Order);

    const selectBox = wrapper.find(".select-box select");

    // Assert that the default option is selected
    expect(selectBox.element.value).toBe("Default");
  });

  it("updates the database storage select box value when an option is selected", async () => {
    const selectBox = wrapper.find(".select-box select");

    // Select an option with value "25"
    await selectBox.setValue("25");

    // Assert that the selected value is updated to "25"
    expect(selectBox.element.value).toBe("25");

    // Select another option with value "100"
    await selectBox.setValue("100");

    // Assert that the selected value is updated to "100"
    expect(selectBox.element.value).toBe("100");
  });
});
