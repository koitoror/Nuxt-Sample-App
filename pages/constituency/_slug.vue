
<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">Constituencies in {{ CountyName }} County</h3>
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
                  :title="item['ConstituencyName']"
                  :fileCount="item['RegisteredVoters'].toLocaleString()"
                  :fileCount2="item['RegisteredVoters'].toLocaleString()"
                  :fileSize="item.totalcount_w + '  Wards '"
                  :fileSize1="item.totalcount_ps + '  Polling Stations '"
                  color="grey darken-4"
                  flat
                  iconColor="pink"
                  titleClass="pink--text"
                  :to="'/ward/' + item['ConstituencyCode']" exact tile
                
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
      CountyCode: this.$route.params.slug,
      CountyName: null

    };
  },
  created() {

    this.getConstituencies();

  },
  methods: {
    async getConstituencies() {
      const { data, error } = await this.$supabase
        // .from('constituency')
        .from('constituency_ward_count_results')
        .select()
        // .select(`
        //     CountyCode,
        //     CountyName,
        //     ConstituencyCode,
        //     ConstituencyName
        // `)
        .eq('CountyCode', this.CountyCode)

      this.data = data  
      this.CountyName = data[0]['CountyName']  
      // console.log(data)
    },
  },
};
</script>

<style scoped>
.v-card {
  /* min-width: 48px;
  max-width: 168px; */
  width: 200px;
}

</style>