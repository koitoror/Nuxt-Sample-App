<template>
  <div>
    <v-container grid-list-xs fluid>
      <v-row>
        <v-col>
          <v-layout wrap>
            <h3 class="title grey--text">My Folder</h3>
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
            title="Presidential"
            fileCount="13 fies"
            fileSize="100 MB"
            color="grey lighten-4"
            flat
          ></card-box>
        </v-col>
        <v-col>
          <card-box
            title="County"
            fileCount="13 fies"
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
            fileCount="13 fies"
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
            fileCount="13 fies"
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
        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardBox from "~/components/CardBox";
export default {
  components: {
    CardBox
  },
  data() {
    return {
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
  }
};
</script>

<style></style>
