<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">Polling Stations in {{ Polling_CentreName }} Polling Centre</h3>
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
                  :fileCount="item['RegisteredVoters'].toString()"
                  fileSize="Go To Form"
                  color="grey darken-4"
                  flat
                  iconColor="indigo"
                  titleClass="indigo--text"
                  :to="'/upload'" exact tile
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
        loading: false,
        data: null,
        CA_WardCode: 718,
        CA_WardCode: this.$route.params.slug,
        Polling_CentreName: this.$route.query.psname,
        // Polling_StationName: this.$route.params.query,
      }
    },
    created() {

      this.getPollingStation();

    },

    methods: {
      async getPollingStation() {
        // console.log(this.$route)

        this.loading = true;
        const { data, error } = await this.$supabase
          .from('polling_station')
          .select()
          .eq('CA-WardCode', this.CA_WardCode)
          .eq('PollingStationName', this.Polling_CentreName)

        this.loading = false;
        this.data = data;
        this.CA_WardName = data[0]['CA-WardName']
        // console.log(data)
        // console.log(this.$route)
      },
    },
  };
</script>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }

  .v-card {
    /* min-width: 270px; */
    width: 280px;
  }

</style>