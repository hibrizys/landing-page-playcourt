<template>
  <footer class="footer-style-area pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-lg-3">
          <div class="single-footer-widget">
            <div class="footer-logo" >
              <a :href="'#'">
                <img src="../../assets/img/logo2.png" alt="Logo"  />
              </a>
              <p>
                PlayCourt is a Platform as a Service (PaaS) serving as the Digital Infrastructure at the Digital Service Division of PT Telekomunikasi Indonesia. 
              </p>
              <ul class="footer-social">
                <li>
                  <a :href="'https://www.facebook.com/TelkomIndonesia'">
                    <i class="bi-facebook" style=" padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="'https://twitter.com/telkomindonesia'">
                    <i class="bi-twitter" style=" padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="'https://www.linkedin.com/company/telekomunikasi-indonesia/'">
                    <i class="bi-linkedin" style=" padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="'https://www.instagram.com/telkomindonesia'">
                    <i class="bi-instagram" style=" padding-left: 1px"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>PlayCourt</h3>
            <ul class="quick-link">
              <li>
                <a  @click="scroll('Overview')" :href="'javascript:void(0)'">Overview</a>
              </li>
              <li>
                <a  @click="scroll('Features')" :href="'javascript:void(1)'">Features</a>
              </li>
              <li>
                <a  @click="scroll('Steps')" :href="'javascript:void(2)'">How To</a>
              </li>
              <li>
                <a  @click="scroll('Order')" :href="'javascript:void(3)'">Order</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>Company</h3>
            <ul class="quick-link">
              <li>
                <a :href="'https://www.telkom.co.id/sites'" target="_blank">Telkom Indonesia</a>
              </li>
              <li>
                <a :href="'https://www.telkom.co.id/sites/about-telkom/id_ID/page/profil-dan-riwayat-singkat-22'" target="_blank">About Telkom</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>About Us</h3>
            <ul class="quick-link">
              <li>
                <a @click="scroll('Overview')" :href="'javascript:void(0)'">PlayCourt</a>
              </li>
              <li>
                <a :href="'https://indigo.id/'" target="_blank">IndigoHub Bandung</a>
              </li>
              <li>
                <a :href="'https://goo.gl/maps/ueSL6AgzaXVetdw8A'"
                  >Jl. Gegerkalong Hilir No.47 Kota Bandung, Jawa Barat 40152</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="single-footer-widget">
            <h3>Contact Us</h3>
            <ul class="address-info">
              <li>
                <i class="bi-telephone-outbound"></i>
                <a :href="'tel:+6282228000720'">+62 822 2800 0720</a>
              </li>
              <li>
                <i class="bi-book"></i>
                <a :href="'mailto:Helpdeskdxb@telkom.co.id'"
                  >Helpdeskdxb@telkom.co.id</a
                >
              </li>
              <li>
                <i class="bi bi-telegram"></i>
                <a :href="'https://t.me/helpdeskdb_bot'">helpdeskdb_bot</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright-style-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="copyright-item">
              <p>
                &copy; Copyright {{ currentYear }} By <a href="#">PlayCourt</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
  methods: {
  scroll(refName) {
    const element = document.getElementById(refName);
    if (element) {
      element.scrollIntoView({ top: element.offsetTop, behavior: "smooth" });
    }
  },
},

};
</script>