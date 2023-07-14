<template>
  <div>
    <Navbar />
    <Overview />
    <features />
    <steps/>
    <Order/>
    <Footer/>
  </div>
</template>

<script >
// @ is an alias to /src
import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import Overview from '../components/Overview.vue'
import Features from '../components/Features.vue'
import Steps from '../components/Steps.vue'
import Order from '../components/Order.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Overview,
    Footer,
    Features,
    Steps,
    Order
  }
}
</script>
