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
      <Countdown :date="end" @onFinish="finish()"></Countdown>

      <v-row>
        <v-col>
          <card-box
            title="Presidential"
            fileCount="1 directory"
            fileSize="100 MB"
            color="grey lighten-4"
            flat
          ></card-box>
        </v-col>
        <v-col>
          <card-box
            title="County"
            fileCount="47 directories"
            fileSize="100 MB"
            color="grey lighten-4"
            flat
            iconColor="amber"
            titleClass="amber--text"
          ></card-box>
        </v-col>

        <v-col>
          <card-box
            title="Constituency"
            fileCount="290 directories"
            fileSize="100 MB"
            color="grey lighten-4"
            flat
            iconColor="pink"
            titleClass="pink--text"
          ></card-box>
        </v-col>

        <v-col>
          <card-box
            title="Ward"
            fileCount="1450 directories"
            fileSize="100 MB"
            color="grey lighten-4"
            flat
            iconColor="indigo"
            titleClass="indigo--text"
          ></card-box>
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

          <v-list class="pa-0">
            <template v-for="(item, index) in itemsRecents">
              <v-list-item :key="index" class="px-0">
                <v-list-item-avatar size="48" color="grey lighten-3">
                  <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <small class="grey--text">
                    {{item.size}}
                  </small>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
        <v-col>
        <template>
          <div>
            <v-progress-linear
              color="light-blue"
              height="10"
              value="10"
              striped
            ></v-progress-linear>
            <br>
            <v-progress-linear
              color="light-green darken-4"
              height="10"
              value="20"
              striped
            ></v-progress-linear>
            <br>
            <v-progress-linear
              height="10"
              value="45"
              striped
              color="lime"
            ></v-progress-linear>
            <br>
            <v-progress-linear
              value="60"
              height="10"
              striped
              color="deep-orange"
            ></v-progress-linear>
          </div>
        </template>
        
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardBox from "~/components/CardBox";
import Countdown from "~/components/Countdown";
export default {
  components: {
    CardBox,
    Countdown

  },
  data() {
    return {
      end: new Date("2022-08-09T05:30:00"),
      itemsRecents: [
        {
          icon: "mdi-folder",
          iconColor: "green",
          title: "Candidate 1",
          subtitle: "image ...",
          size: "10MB"
        },
        {
          icon: "mdi-folder",
          iconColor: "blue",
          title: "Candidate 2",
          subtitle: "image ...",
          size: "10MB"
        },
        {
          icon: "mdi-folder",
          iconColor: "green",
          title: "Candidate 1",
          subtitle: "image ...",
          size: "10MB"
        },
        {
          icon: "mdi-folder",
          iconColor: "blue",
          title: "Candidate 2",
          subtitle: "image ...",
          size: "10MB"
        }
      ]
    };
  },
  methods: {
    finish() {
      console.log("finish");
    },
  }
};
</script>

<style></style>
