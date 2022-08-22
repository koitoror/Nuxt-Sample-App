<template>
  <div>
    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">National</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-layout>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <card-box
            title="Total Registered Voters" 
            fileCount="22,152,144" 
            :fileSize="'47  Counties '"
            :fileSize1="data1['totalcount_ps'].toLocaleString() + '  Polling Stations '"
            color="grey darken-4" 
            flat></card-box>
        </v-col>
        <v-col>
          <card-box title="Total Votes Cast" fileCount="14,487,502" 
            fileSize=" Turnout: 65.4%" 
            color="grey darken-4" flat iconColor="amber"
            titleClass="amber--text"></card-box>
        </v-col>

        <v-col>
          <card-box title="Leading Candidate" fileCount="RUTO WILLIAM SAMOEI" fileSize=" " color="grey darken-4" flat
            iconColor="pink" titleClass="pink--text"></card-box>
        </v-col>

        <v-col>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">

              <card-box dark v-bind="attrs" v-on="on" title="Projected Winner" fileCount="No Candidate" fileSize=" "
                color="grey darken-4" flat iconColor="indigo" titleClass="indigo--text"></card-box>

            </template>
            <span>Leading Candidate <br>After 50% of Registered Votes have been cast</span>
          </v-tooltip>

        </v-col>

      </v-row>

      <v-row>
        <v-col>
          <card-box title="National - (President)" fileCount="1 elective office" fileSize="Contestants: 4" fileSize1="Losers: 3"
            color="grey darken-4" flat :to="'/'" exact tile></card-box>
        </v-col>

        <v-col>
        
          <card-box title="County - (Gov./ Sen./ W.Rep)" fileCount="47 elective offices" 
            fileSize="Contestants: 266/341/360"
            fileSize1="Losers: 219/294/313" color="grey darken-4" flat iconColor="amber" titleClass="amber--text"
            :to="'/county'" 
            elevation="24"
            outlined
            shaped
            icon="mdi-check-decagram-outline"
          exact tile>
          
          </card-box>

        </v-col>

        <v-col>
          <card-box title="Constituency - (M.P.)" fileCount="290 elective offices" fileSize="Contestants: 2,132"
            fileSize1="Losers: 1,842" color="grey darken-4" flat iconColor="pink" titleClass="pink--text"
            :to="'/constituency/' + item['CountyCode']" exact tile></card-box>
        </v-col>

        <v-col>
          <card-box title="Ward - (M.C.A.)" fileCount="1450 elective offices" fileSize="Contestants: 12,997"
            fileSize1="Losers: 11,547" color="grey darken-4" flat iconColor="indigo" titleClass="ndigo--texti"
            :to="'/ward/' + item['ConstituencyCode']" exact tile>
          </card-box>
        </v-col>

      </v-row>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="grey--text text--darken-3">Votes By Candidate</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
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
              <v-icon>mdi-arrow-down</v-icon>
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

  </div>
</template>

<script>

export default {
  data() {
    return {
      // data1: null,
      data1: {
        "totalcount_ps": 46135,
      },
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
      item: {
        'CountyCode': 27,
        'ConstituencyCode': 143
      }
    };
  },

  created() {

    this.getNationalResults();

  },

  methods: {
    async getNationalResults() {
      const { data, error } = await this.$supabase
        .from('national_count_results')
        .select()
      let data1 = data[0];
      this.data1 = data1;
      // console.log(data1);
      // this.items()
      var c1 = this.convertToInternationalFormat(data1['RUTO WILLIAM SAMOEI'])
      var c2 = this.convertToInternationalFormat(data1['ODINGA RAILA'])
      var c3 = this.convertToInternationalFormat(data1['WAJACKOYAH GEORGE LUCHIRI'])
      var c4 = this.convertToInternationalFormat(data1['WAIHIGA DAVID MWAURE'])

      var cValue1 = this.percentage(data1['RUTO WILLIAM SAMOEI'])
      var cValue2 = this.percentage(data1['ODINGA RAILA'])
      var cValue3 = this.percentage(data1['WAJACKOYAH GEORGE LUCHIRI'])
      var cValue4 = this.percentage(data1['WAIHIGA DAVID MWAURE'])

      this.itemsRecents[0].size = c1
      this.itemsRecents[1].size = c2
      this.itemsRecents[2].size = c3
      this.itemsRecents[3].size = c4

      this.itemsRecents[0].value = Number(cValue1)
      this.itemsRecents[1].value = Number(cValue2)
      this.itemsRecents[2].value = Number(cValue3)
      this.itemsRecents[3].value = Number(cValue4)

      // this.formattedItems();
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


    // formattedItems() {
    //   return this.itemsRecents.map(item => {
    //     return {
    //       ...item,
    //       title: "ODINGA RAILA",
    //       value: Math.round(item.value * this.data1.totalcount_ps / this.data1["RegisteredVoters"])
    //     }
    //   })
    // }
  },

  computed : {
    
    

  }

};
</script>

<style scoped>
.theme--dark.v-sheet {
  background-color: #1e1e1e;
  border-color: #1e1e1e;
  color: #fff;
}

.theme--dark.v-card {
  background-color: #1e1e1e;
  color: #fff;
}

</style>
