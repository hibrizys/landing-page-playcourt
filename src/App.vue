<template>
  <div id="app">
      <Preloader v-if="isLoading" />
      <router-view>

      </router-view>
      <BackToTop />
  </div>
</template>

<script >
import Preloader from './components/Layouts/Preloader'
import BackToTop from './components/Layouts/BackToTop'

export default {
  name: 'App',
  components: {
      Preloader,
      BackToTop
  },
  data() {
      return {
          isLoading: true
      }
  },
  mounted() {
      setTimeout(() => {
          this.isLoading = false
      }, 2000)
  }
}
</script>