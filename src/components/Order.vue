<template>
  <div id="Order" class="Order-bg pt-100 pb-70">
    <div class="container">
      <div :class="'main-section-title'">
        <span class="sub-title"># CHOOSE YOUR SERVICE</span>
        <h2>Nearly We Have Been Trying To Provide Those</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="why-choose-us-item">
            <div class="choose-image">
              <img src="../assets/img/aws.png" alt="image" />
            </div>
            <div class="choose-content">
              <h3 class="aws">Amazon Web Services</h3>
              <ul class="list">
                <li>
                  <i class="bi-check-circle"></i> Free Amazon AWS usage
                </li>
                <li><i class="bi-check-circle"></i> Limited time offer</li>
                <li>
                  <i class="bi-check-circle"></i> Get your access today
                </li>
              </ul>
              <a href="https://dashboard.playcourt.id/login" class="choose-btn"
                >Order Now</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="why-choose-us-item">
            <div class="choose-image">
              <img src="../assets/img/redhat.png" alt="image" />
            </div>
            <div class="choose-content">
              <h3>RedHat Openshift</h3>
              <div class="slider">
                <vue-slider
                  v-bind="demo"
                  v-model="demo.value1"
                ></vue-slider>
              </div>
              <div v-if="demo.value1 == 0">
                <ul class="list">
                  <li>
                    <i class="bi-check-circle"></i>
                    <strong>1</strong>&nbsp;CPU Core
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong>1GB</strong>&nbsp;Memory RAM
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong
                      >Low & Medium-traffic Websites and Web Application</strong
                    >
                  </li>
                </ul>
              </div>
              <div v-if="demo.value1 == 1" data-test='content-for-value1'>
                <ul class="list">
                  <li>
                    <i class="bi-check-circle"></i>
                    <strong>2</strong>&nbsp;CPU Core
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong>2GB</strong>&nbsp;Memory RAM
                  </li>
                  <li>
                    <i class="bi-check-circle"></i>
                    <strong>Low & Medium-traffic Websites and Web Application</strong>
                  </li>
                </ul>
              </div>
              <div v-if="demo.value1 == 2" data-test='content-for-value2'>
                <ul class="list">
                  <li>
                    <i class="bi-check-circle"></i>
                    <strong>4</strong>&nbsp;CPU Core
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong>4GB</strong>&nbsp;Memory RAM
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong
                      >High-traffic Web Server</strong
                    >
                  </li>
                </ul>
              </div>
              <div v-if="demo.value1 == 3" data-test='content-for-value3'>
                <ul class="list">
                  <li>
                    <i class="bi-check-circle"></i>
                    <strong>4</strong>&nbsp;CPU Core
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong>8GB</strong>&nbsp;Memory RAM
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong
                      >High-traffic Web Server</strong
                    >
                  </li>
                </ul>
              </div>
              <div v-if="demo.value1 == 4" data-test='content-for-value4'>
                <ul class="list">
                  <li>
                    <i class="bi-check-circle"></i>
                    <strong>8</strong>&nbsp;CPU Core
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong>8GB</strong>&nbsp;Memory RAM
                  </li>
                  <li>
                    <i class="bi-check-circle"></i
                    ><strong
                      >Application performing real-time processing</strong
                    >
                  </li>
                </ul>
              </div>
              <div v-if="demo.value1 == 5" data-test='content-for-value5'>
                <ul class="list">
                  <li>
                    <i :class="'bi-check-circle'"></i>
                    <strong>8</strong>&nbsp;CPU Core
                  </li>
                  <li>
                    <i :class="'bi-check-circle'"></i
                    ><strong>16GB</strong>&nbsp;Memory RAM
                  </li>
                  <li>
                    <i :class="'bi-check-circle'"></i
                    ><strong
                      >Application performing real-time processing</strong
                    >
                  </li>
                </ul>
              </div>
              <div :class="'form-group'" style="margin-bottom: 25px">
                <div :class="'select-box'">
                  <select v-model="dbSelect" :data-testid="'database-storage-select'">
                    <option selected disabled value="">
                      Select database storage
                    </option>
                    <option :value="'25'">25GB</option>
                    <option :value="'50'">50GB</option>
                    <option :value="'100'">100GB</option>
                  </select>
                </div>
              </div>
              <a :href="'https://dashboard.playcourt.id/login'" :class="'choose-btn'"
                >Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import vueSlider from "vue-slider-component";
export default {
  name: "AppOrder",
  data() {
    return {
      demo: {
        value1: "0",
        width: "100%",
        min: 0,
        max: 5,
        style: {
          marginLeft: "10%",
          width: "300px",
        },
        data: ["0", "1", "2", "3", "4", "5"],
      },
      dbSelect: "", // Initialize the dbSelect variable
    };
  },
  components: {
    vueSlider,
  },
};
</script>