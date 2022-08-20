
<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">Counties in Kenya</h3>
            <v-spacer></v-spacer>
            <v-btn icon v-on:click.prevent>
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
                  :title="item['CountyName']"
                  :fileCount="item['RegisteredVoters'].toLocaleString()"
                  :fileCount2="item['RegisteredVoters'].toLocaleString()"
                  :fileSize="item.totalcount_constituency + '  Constituencies '"
                  :fileSize1="item.totalcount_ps + '  Polling Stations '"
                  color="grey darken-4"
                  flat
                  iconColor="amber"
                  titleClass="amber--text"
                  :to="'/constituency/' + item['CountyCode']" exact tile
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
  data() {
    return {
      data: null,
    };
  },
  created() {

    this.getCounties();

  },
  methods: {
    async getCounties() {
      const { data, error } = await this.$supabase
        // .from('county')
        // .from('national_count_results')
        // .from('county_constituency_count')
        .from('county_constituency_count_results')
        .select()
      this.data = data
      // console.log(data);
    },
  },
};
</script>

<style scoped>
.v-card {
  /* min-width: 48px;
  max-width: 168px; */
  width: 220px;
}

</style>