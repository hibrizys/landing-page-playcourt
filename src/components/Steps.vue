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
                      Donec sollicitudin molestie malesuada. Vivamus magna
                      justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                      pretium ut lacinia in, elementum id enim. Pellentesque in
                      ipsum id orci porta dapibus. Sed porttitor lectus nibh.
                      Nulla quis lorem libero malesuada.
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
                      Donec sollicitudin molestie malesuada. Vivamus magna
                      justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                      pretium ut lacinia in, elementum id enim. Pellentesque in
                      ipsum id orci porta dapibus. Sed porttitor lectus nibh.
                      Nulla quis lorem libero malesuada.
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
                      Donec sollicitudin molestie malesuada. Vivamus magna
                      justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                      pretium ut lacinia in, elementum id enim. Pellentesque in
                      ipsum id orci porta dapibus. Sed porttitor lectus nibh.
                      Nulla quis lorem libero malesuada.
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