<template>
  <div id="Steps" class="process-style-area ptb-100">
    <div class="container">
      <div class="main-section-title">
        <span class="sub-title"># STEPS & PROCESS</span>
        <h2>Easy Step To Start Your Project</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="process-style-accordion">
            <div class="accordion" id="ProcessAccordion">
              <div class="accordion-item">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>01</span> Choose Programming Language
                </button>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#ProcessAccordion"
                >
                  <div class="accordion-body">
                    <p class="bold">
                      Choose your preferred programming language for the application development. This step involves selecting the programming language that best suits the requirements and objectives of your project.
                    </p>
                    <p>
                      After considering various factors such as project scope, team expertise, and performance considerations, finalize the programming language that will be the foundation of your application development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>02</span> Configure Topology
                </button>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#ProcessAccordion"
                >
                  <div class="accordion-body">
                    <p class="bold">
                      Configure the topology of your application's infrastructure. This includes setting up the network architecture, defining the relationship between different components, and establishing the communication protocols.
                    </p>
                    <p>
                      By defining the topology, you ensure that your application's components are properly connected and function as a cohesive system, optimizing performance and resource utilization.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span>03</span> Select the CPU and RAM limitations
                </button>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#ProcessAccordion"
                >
                  <div class="accordion-body">
                    <p class="bold">
                      Determine the CPU and RAM limitations for your application's containers. Assess the resource requirements of each container and allocate appropriate CPU and RAM resources to ensure optimal performance.
                    </p>
                    <p>
                      By carefully managing CPU and RAM limitations, you can prevent resource contention and maintain stability in your application's execution environment. This step ensures that each container operates efficiently within its allocated resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="process-style-image">
            <img src="../assets/img//Steps1.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSteps",
};
</script>