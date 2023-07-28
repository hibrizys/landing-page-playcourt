import { mount } from "@vue/test-utils";
import Features from "@/components/Features.vue"; // Replace with the actual path to Features.vue

const wrapper = mount(Features);

describe("Features", () => {
  it("renders correctly", () => {
    // Assert that the component renders without errors
    expect(wrapper.exists()).toBe(true);

    // Assert that the component contains the correct section title
    expect(wrapper.find(".sub-title").text()).toBe("# WHAT'S THE FEATURES");
    expect(wrapper.find("h2").text()).toBe("All About Features Of Playcourt");

    // Assert that the component contains the correct number of feature items
    const featureItems = wrapper.findAll(".features-item");
    expect(featureItems).toHaveLength(4);

    // Assert the content of the first feature item
    const firstFeature = featureItems[0];
    expect(firstFeature.find(".features-icon i").classes("bi-bag-plus")).toBe(
      true
    );
    expect(firstFeature.find("h3").text()).toBe("Self Healing");
    expect(firstFeature.find("p").text()).toBe(
      "Restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve"
    );

    // Add similar assertions for other feature items if needed
  });

  it("displays correct icon and text for the second feature item", () => {
    const secondFeature = wrapper.findAll(".features-item")[1];

    expect(secondFeature.find(".features-icon i").classes("bi-box")).toBe(true);
    expect(secondFeature.find("h3").text()).toBe("Automatic Binpacking");
    expect(secondFeature.find("p").text()).toBe(
      "Automatically places containers based on their resource requirements and other constraints, while not sacrificing availability. Mix critical and best-effort workloads in order to drive up utilization and save even more resources"
    );
  });

  it("displays correct icon and text for the third feature item", () => {
    const thirdFeature = wrapper.findAll(".features-item")[2];

    expect(thirdFeature.find(".features-icon i").classes("bi-rulers")).toBe(
      true
    );
    expect(thirdFeature.find("h3").text()).toBe("Service Load Balancing");
    expect(thirdFeature.find("p").text()).toBe(
      "No need to modify your application to use an unfamiliar service discovery mechanism. Playcourt gives containers their own IP addresses and a single DNS name for a set of containers, and can load-balance across them"
    );
  });

  it("displays correct icon and text for the fourth feature item", () => {
    const fourthFeature = wrapper.findAll(".features-item")[3];

    expect(
      fourthFeature.find(".features-icon i").classes("bi-arrow-repeat")
    ).toBe(true);
    expect(fourthFeature.find("h3").text()).toBe(
      "Automated Rollout & Rollback"
    );
    expect(fourthFeature.find("p").text()).toBe(
      "Progressively rolls out changes to your application or its configuration, while monitoring application health to ensure it doesn't kill all your instances at the same time. If something goes wrong will Playcourt rollback the change"
    );
  });

  it("contains a container with specific classes", () => {
    const container = wrapper.find(".container");

    // Assert that the container has the correct classes
    expect(container.classes()).toContain("container");
  });
});
