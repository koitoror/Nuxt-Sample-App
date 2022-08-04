<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">Polling Station</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-layout>
        </v-col>
      </v-row>


      <v-row>
        <template v-for="(item, index) in data">

          <v-col>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <card-box
                  dark
                  v-bind="attrs"
                  v-on="on"
                  :loading="loading"
                  :title="item['PollingStationName']"
                  :fileCount="item['ConstituencyCode'].toString()"
                  fileSize="Wards"
                  color="grey darken-4"
                  flat
                  iconColor="indigo"
                  titleClass="indigo--text"
                ></card-box>

              </template>
              <!-- <span>After 50% of Registered Votes have been cast</span> -->
            </v-tooltip>

          </v-col>
        </template>
      </v-row>

    </v-container>

</template>

<script>
  export default {
    data () {
      return {
        // loading: false,
        data: null,
        CA_WardCode: this.$route.params.slug,
      }
    },
    created() {

      this.getPollingStation();

    },

    methods: {
      async getPollingStation() {
        // this.loading = true;
        const { data, error } = await this.$supabase
          .from('polling_station_unique')
          .select()
          .eq('CA-WardCode', this.CA_WardCode)

        // this.loading = false;
        this.data = data;
        // console.log(data)
      },
    },
  };
</script>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  /* .v-card {
    width: 400px;
  } */

</style>