<template>
  <nav
    :class="[
      'main-navbar navbar navbar-expand-md navbar-light',
      { 'is-sticky': isSticky },
    ]"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="black-logo" style="height: 40px;" src="../../assets/img/logo.png" alt="Logo" />
      </router-link>

      <div
        class="navbar-toggler"
        @click="active = !active"
        :aria-pressed="active ? 'true' : 'false'"
        v-bind:class="{ active: button_active_state }"
        v-on:click="button_active_state = !button_active_state"
      >
        <i class="bi bi-list"></i>
        <i class="bi bi-x"></i>
      </div>

      <div :class="{ 'collapse navbar-collapse': true, toggler: active }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Overview')"
              href="javascript:void(0)"
              >Overview</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Features')"
              href="javascript:void(1)"    
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Steps')"
              href="javascript:void(2)"
              >How To</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Order')"
              href="javascript:void(3)"
              >Order</a
            >
          </li>
        </ul>
      </div>
      <div class="side-nav">
        <a class="side-nav-left log-in" href="https://dashboard.playcourt.id/login">Log In</a>
        <a class="side-nav-right cd-signup sign-up" href="https://dashboard.playcourt.id/register">Register</a>
      </div>
    </div>
  </nav>
</template>

<script >
export default {
  name: "AppNavbar",
  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
    };
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
  methods: {
  scroll(refName) {
    const element = document.getElementById(refName);
    if (element) {
      element.scrollIntoView({behavior: "smooth" });
    }
  },
},
};
</script>