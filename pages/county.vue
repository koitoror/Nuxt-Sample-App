
<template>

    <v-container grid-list-xs fluid>

      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">County</h3>
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
                  :title="item[' CountyName '].trim()"
                  :fileCount="item[' RegisteredVoters '].toString()"
                  fileSize="Constituencies"
                  color="grey darken-4"
                  flat
                  iconColor="amber"
                  titleClass="amber--text"
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
        .from('county')
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
  width: 200px;
}

</style>