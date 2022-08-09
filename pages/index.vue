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
          <card-box title="Total Registered Voters" fileCount="22,152,144" :fileSize="'47  Counties '"
            :fileSize1="'46, 135  Polling Stations '" color="grey darken-4" flat></card-box>
        </v-col>
        <v-col>
          <card-box title="Total Votes Cast" fileCount="0" fileSize=" " color="grey darken-4" flat iconColor="amber"
            titleClass="amber--text"></card-box>
        </v-col>

        <v-col>
          <card-box title="Leading Candidate" fileCount="Candidate 1" fileSize=" " color="grey darken-4" flat
            iconColor="pink" titleClass="pink--text"></card-box>
        </v-col>

        <v-col>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">

              <card-box dark v-bind="attrs" v-on="on" title="Projected Winner" fileCount="Candidate 1" fileSize=" "
                color="grey darken-4" flat iconColor="indigo" titleClass="indigo--text"></card-box>

            </template>
            <span>Leading Candidate <br>After 50% of Registered Votes have been cast</span>
          </v-tooltip>

        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <card-box title="National" fileCount="1 elective office" fileSize=" " color="grey darken-4" flat :to="'/'"
            exact tile></card-box>
        </v-col>
        <v-col>
          <card-box title="County" fileCount="47 elective offices" fileSize=" " color="grey darken-4" flat
            iconColor="amber" titleClass="amber--text" :to="'/county'" exact tile></card-box>
        </v-col>

        <v-col>
          <card-box title="Constituency" fileCount="290 elective offices" fileSize=" " color="grey darken-4" flat
            iconColor="pink" titleClass="pink--text" :to="'/constituency/' + item['CountyCode']" exact tile></card-box>
        </v-col>

        <v-col>
          <card-box title="Ward" fileCount="1450 elective offices" fileSize=" " color="grey darken-4" flat
            iconColor="indigo" titleClass="ndigo--texti" :to="'/ward/' + item['ConstituencyCode']" exact tile>
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

            <Winner></Winner>

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
      itemsRecents: [
        {
          icon: "mdi-account-check-outline",
          iconColor: "deep-orange",
          title: "Candidate 1",
          value: "53",
          subtitle: "party: AZIMIO ALLIANCE PARTY",
          size: "10M"
        },
        {
          icon: "mdi-account-check-outline",
          iconColor: "lime",
          title: "Candidate 2",
          value: "40",
          subtitle: "party: UNITED DEMOCRATIC PARTY",
          size: "8M"
        },
        {
          icon: "mdi-account-check-outline",
          iconColor: "light-green darken-4",
          title: "Candidate 3",
          value: "4",
          subtitle: "party: ROOTS PARTY",
          size: "4M"
        },
        {
          icon: "mdi-account-check-outline",
          iconColor: "light-blue",
          title: "Candidate 4",
          value: "1",
          subtitle: "party: AGANO PARTY",
          size: "2M"
        }
      ],
      item: {
        'CountyCode': 27,
        'ConstituencyCode': 143
      }
    };
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
