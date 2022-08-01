<template>
  <v-app dark>
    <v-navigation-drawer app permanent floating width="120">
      <v-layout column justify-center justify-space-between fill-height>
        <div>
          <v-list-item>
            <v-list-item-title class="text-center">
              Mr. <span class="grey--text">Elector</span>
            </v-list-item-title>
          </v-list-item>
        </div>

        <v-list nav>
          <template v-for="(item, index) in items">
            <v-list-item
              :to="`/${item.link}`"
              nuxt
              :key="index"
              :title="item.title"
              justify-center
            >
              <v-list-item-content>
                <v-avatar size="36" width="64" class="text-center">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-avatar>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>

        <div>
          <v-list-item>
            <v-list-item-content class="text-center">
              <div>
                <v-avatar size="48" color="grey darken-1">
                  <img src="@/static/icon.png" alt="alt" />
                </v-avatar>
                <p class="pa-2">
                  Sphere Logic AI
                </p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar flat app fixed color="#1e1e1e">
      <v-toolbar-title v-text="'Dashboard'"></v-toolbar-title>
      <v-spacer>
        <v-col>
        </v-col>
        <v-col>
        </v-col>
        <v-col class="text-center d-flex align-center justify-space-around">
          <H2> Elections Countdown</H2>
        </v-col>

        <Countdown :date="end" @onFinish="finish()"></Countdown>

      </v-spacer>
      <div>
        <v-text-field
          placeholder="Search"
          filled
          small
          solo-inverted
          hide-details
          flat
          dense
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
      
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
  import Countdown from "~/components/Countdown";
  export default {
    components: {
      Countdown
    },
    data() {
      return {
        end: new Date("2022-08-09T05:30:00"),

        items: [
          { link: "",
          icon: "mdi-apps",
          title: "Dasboard" 
          },
          {
            link: "county",
            icon: "mdi-bag-personal-outline",
            title: "County"
          },
          { link: "constituency",
          icon: "mdi-equalizer-outline",
          title: "Constituency"
          },
          { link: "ward",
          icon: "mdi-cog-outline",
          title: "Ward"
          }
        ]
      };
    }
  };
</script>

<style></style>
