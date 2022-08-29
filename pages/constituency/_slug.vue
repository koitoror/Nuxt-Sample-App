
<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <v-btn icon @click="$router.back()" >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <h3 class="title grey--text">Constituencies in {{ CountyName }} County</h3>
            <v-spacer></v-spacer>
            <v-btn icon @click="$router.forward()" >
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

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="grey--text text--darken-3">Votes By Candidate</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <!-- <v-icon>mdi-arrow-right</v-icon> -->
            </v-btn>
          </v-layout>

          <v-list class="pa-1">
            <template v-for="(item, index) in itemsRecents">
              <template>
                <v-list-item class="px-1" :key="index">

                  <v-list-item-avatar size="48" color="grey darken-3">
                    <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>

                    <v-progress-linear :value="item.value" height="10" striped :color="item.iconColor">
                    <template>
                        <small>
                          <strong> {{ item.value }}% </strong>
                        </small>
                      </template>
                    </v-progress-linear>
                    <v-list-item-subtitle>
                      {{ item.subtitle }}
                    </v-list-item-subtitle>
                  </v-list-item-content>


                  <v-list-item-action>
                    <small class="grey--text">
                      {{ item.size }}
                    </small>
                  </v-list-item-action>

                </v-list-item>
              </template>
            </template>
          </v-list>

        </v-col>

        <v-col>
          <v-layout wrap>
            <h3 class="grey--text text--darken-3">Projected Winner</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <!-- <v-icon>mdi-arrow-down</v-icon> -->
            </v-btn>
          </v-layout>

          <v-list class="pa-0">

            <Winner
              :fileSize="itemsRecents[0].value"
              color="grey darken-4"
              flat
              :iconColor="itemsRecents[0].iconColor"
              titleClass="pink--text"

            ></Winner>

          </v-list>
        </v-col>

      </v-row>

    </v-container>

</template>

<script>
export default {
  data() {
    return {
      data: null,
      data1: null,
      CountyCode: this.$route.params.slug,
      CountyName: null,
      itemsRecents: [
        {
          icon: "mdi-account-check-outline",
          iconColor: "lime",
          title: "RUTO WILLIAM SAMOEI",
          value: 40,
          subtitle: "party: UNITED DEMOCRATIC PARTY",
          size: "4.8M"
        },
        {
          icon: "mdi-account-check-outline",
          iconColor: "deep-orange",
          title: "ODINGA RAILA",
          value: 53,
          subtitle: "party: AZIMIO ALLIANCE PARTY",
          size: "6.5M"
        },

        {
          icon: "mdi-account-check-outline",
          iconColor: "light-green darken-4",
          title: "WAJACKOYAH GEORGE LUCHIRI",
          value: 0.5,
          subtitle: "party: ROOTS PARTY",
          size: "0.053M"
        },
        {
          icon: "mdi-account-check-outline",
          iconColor: "light-blue",
          title: "WAIHIGA DAVID MWAURE",
          value: 0.17,
          subtitle: "party: AGANO PARTY",
          size: "0.02M"
        }
      ],

    };
  },
  created() {

    this.getConstituencies();
    this.getCounties();


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

    async getCounties() {
      const { data, error } = await this.$supabase
        // .from('national_count_results')
        .from('county_constituency_count_results')

        .select()
        .eq('CountyCode', this.CountyCode)

      let data1 = data[0];
      // let data1 = data;
      this.data1 = data1;
      // console.log('data1 ', data1);
      // this.items()
      var c1 = this.convertToInternationalFormat(data1['RUTO WILLIAM SAMOEI'])
      var c2 = this.convertToInternationalFormat(data1['ODINGA RAILA'])
      var c3 = this.convertToInternationalFormat(data1['WAJACKOYAH GEORGE LUCHIRI'])
      var c4 = this.convertToInternationalFormat(data1['WAIHIGA DAVID MWAURE'])

      var turnoutRegistered = ( (parseFloat(data1['VoterTurnout'])/100) * (data1['RegisteredVoters'])).toFixed(0)
      // console.log('turnoutRegistered ', turnoutRegistered, parseFloat(data1['VoterTurnout']));
      var cValue1 = this.percentage(data1['RUTO WILLIAM SAMOEI'], turnoutRegistered)
      var cValue2 = this.percentage(data1['ODINGA RAILA'], turnoutRegistered)
      var cValue3 = this.percentage(data1['WAJACKOYAH GEORGE LUCHIRI'], turnoutRegistered)
      var cValue4 = this.percentage(data1['WAIHIGA DAVID MWAURE'], turnoutRegistered)

      this.itemsRecents[0].size = c1
      this.itemsRecents[1].size = c2
      this.itemsRecents[2].size = c3
      this.itemsRecents[3].size = c4

      this.itemsRecents[0].value = Number(cValue1)
      this.itemsRecents[1].value = Number(cValue2)
      this.itemsRecents[2].value = cValue3
      this.itemsRecents[3].value = cValue4

      // this.formattedItems();
      this.itemsRecents.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));

      // console.log('this.itemsRecent', this.itemsRecents)
    },

    convertToInternationalFormat (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6

        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3

        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

        : Math.abs(Number(labelValue));

    },

    percentage(partialValue, totalValue=14487502) {
      let res =  Number( (100 * partialValue) / totalValue ).toFixed(2);
      // console.log(partialValue, totalValue, res)
      return res;
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