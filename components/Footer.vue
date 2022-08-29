<template>
  <vo-foter
    dark
    padless
    width="100%"
  >
    <v-card
      flat
      tile
      dark
      width="100%"
      class="white--text text-center"
    >
      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text> -->

      <v-card-text class="white--text pt-0 mx-90">
          <v-container>
              <v-row class="container-fluid text-center text-md-left">
                <!-- <v-col class="col-md-3 mt-md-0 mt-3"> -->
                    <!-- <img src="~/assets/logo_footer.png" class="image" height="150" alt=""> -->
                <!-- </v-col> -->
                <hr class="clearfix w-100 d-md-none pb-3">
                <v-col class="col-md-3 mb-md-0 mb-3">
                    <h3 class="text-uppercase">ABOUT SERVICE</h3>
                    <ul class="list-unstyled">
                    <li v-for="item in items" :key="item.id">
                        <a :href="item.link"> {{item.titre}}</a>
                    </li>
                    </ul>
                </v-col>
                <v-col class="col-md-3 mb-md-0 mb-3">
                    <!-- Links -->
                    <h3 class="text-uppercase">COMPLIANCE ELECTOR.ML</h3>

                    <ul class="list-unstyled">
                    <li v-for="item1 in items1" :key="item1.id">
                        <a :href="item1.link"> {{item1.titre}}</a>
                    </li>
                    </ul>
                </v-col>

                <v-col class="col-md-3 mb-md-0 mb-3">
                    <!-- Links -->
                    <h3 class="text-uppercase">CONTACT-US</h3>
                    <ul class="list-unstyled">
                    <li>
                        <a href="/contact"> Contact-Us </a>
                    </li>
                    <!-- <li>
                        <a href="tel:+254700000000">0700 000000</a>
                    </li> -->
                    <li>
                        <a href="mailto:info@elector.ml">info@elector.ml</a>
                    </li>
                    <!-- <li>
                        <a href="https://goo.gl/maps/BRKHcB228gjgptFw7"> Local à Oran (sur google maps) </a>
                    </li> -->
                    </ul>
                </v-col>
                <v-col class="col-md-3 mb-md-0 mb-3">
                    <!-- Links -->
                    <v-card-text class="white--text">
                              <div>Owned by: Sphere Logic - AI </div>

                    </v-card-text>
                </v-col>
              </v-row>
          </v-container>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-text class="white--text">
        Copyright {{ new Date().getFullYear() }} — <strong> ELECTOR.ML </strong>
      </v-card-text>
    </v-card>
  </vo-foter>
</template>

<script>
    export default {
        data() {
            return {
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                    'mdi-youtube',
                ],
                items:[
                    {
                      id:1,
                      titre:"What is ELECTOR.ML ?",
                      link:"/about", 
                    },
                    {
                      id:2,
                      titre:"Frequently Asked Guestions",
                      link:"/faq", 
                    },
                ],
                items1:[
                    {
                      id:1,
                      titre:"Terms and Conditions",
                      link:"/terms-and-conditions", 
                    },
                    {
                      id:2,
                      titre:"Privacy Policy",
                      link:"/privacy-policy", 
                    },
                ],
            }
        },
    }
</script>

<style scoped>
li > a{
  color: whitesmoke;
  text-decoration: none;
}
li > a:hover{
    text-decoration: underline;
}
.image{
    opacity: 0.7;
    margin-top: -50px;
}

vo-foter {
  margin-left: 100px !important;
}
</style>