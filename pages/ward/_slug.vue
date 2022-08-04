<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">Ward</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-layout>
        </v-col>
      </v-row>

      <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="value"
            color="teal"
          >
            {{ value }}
          </v-progress-circular>

          <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="15"
            :value="value"
            color="primary"
          >
            {{ value }}
          </v-progress-circular>

          <v-progress-circular
            :rotate="90"
            :size="100"
            :width="15"
            :value="value"
            color="red"
          >
            {{ value }}
          </v-progress-circular>

          <v-progress-circular
            :rotate="180"
            :size="100"
            :width="15"
            :value="value"
            color="pink"
          >
            {{ value }}
          </v-progress-circular>

      </div>

      <v-row>
        <template v-for="(item, index) in data">

          <v-col>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <card-box
                  dark
                  v-bind="attrs"
                  v-on="on"
                  :title="item['CA-WardName']"
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
    
    setup() {
      // const route = this.$route
      // console.log(this.$route.fullPath);

      // console.log(routes)
      
    },

    data () {
      return {
        interval: {},
        value: 0,
        data: null,
        ConstituencyCode: this.$route.params.slug,
      }
    },
    created() {

      this.getWards();

    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
    methods: {
      async getWards() {
        const { data, error } = await this.$supabase
          .from('ward')
          // .select()
          .select(`
            CA-WardName,
            ConstituencyCode,
            ConstituencyName
          `)
          .eq('ConstituencyCode', this.ConstituencyCode)

        this.data = data  
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
    /* min-width: 48px;
    max-width: 168px; */
    width: 200px;
  }

</style>