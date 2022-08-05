<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">Polling Centres in {{ CA_WardName }} Ward</h3>
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
                  fileSize="Polling Station"
                  color="grey darken-4"
                  flat
                  iconColor="indigo"
                  titleClass="indigo--text"
                  :to="'/polling_station/' + item['CA-WardCode'] + '/\?psname=' + item['PollingStationName']" exact tile

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
        CA_WardCode: this.$route.params.slug,
        CA_WardName: null,
      }
    },
    created() {

      this.getPollingStation();

    },

    methods: {
      async getPollingStation() {
        this.loading = true;
        const { data, error } = await this.$supabase
          .from('polling_centre')
          .select()
          .eq('CA-WardCode', this.CA_WardCode)

        this.loading = false;
        this.data = data;
        this.CA_WardName = data[0]['CA-WardName']
        // console.log(data)
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