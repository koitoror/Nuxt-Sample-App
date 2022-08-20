<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          No Candidate
        </v-list-item-title>
        <v-list-item-subtitle>[ Projected Winner ]</v-list-item-subtitle>
        <br>
      </v-list-item-content>
    </v-list-item>
        <br>
    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h3"
          cols="6"
          pa="4"
        >
          <!-- 00.00&#37; -->
          49.51&#37;
        </v-col>
        <v-col cols="6">
            <v-btn icon>
                <v-icon size="150" color="deep-orange" pa="6">mdi-account-check-outline</v-icon>
            </v-btn>        

        </v-col>
      </v-row>
    </v-card-text>

      <br>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-title>PRESIDENT  ELECT</v-list-item-title>
    </v-list-item>



  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
      }
    },
  }
</script>