<template>
<v-card v-bind="$attrs" v-on="$listeners">
  <v-list-item>
    <v-list-item-content class="text-left">
      <v-layout wrap>
        <v-icon size="48" :color="iconColor">{{icon}}</v-icon>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-layout>

      </vla>
      <v-list-item-title class="my-2" :class="titleClass">{{title}}</v-list-item-title>
      <v-list-item-subtitle>
        <v-layout wrap>
          <span>{{fileCount}}</span>
          <v-spacer></v-spacer>
          <b>{{fileSize}}</b>
        </v-layout>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</v-card>
</template>

<script>
export default {
  inheritAttrs:false,
  props: {
    title:{type:String,default:'UnTitle'},
    fileSize:{type:String,default:'0'},
    fileCount:{type:String,default:'0 file'},
    icon: {type:String,default: 'mdi-folder-open-outline'},
    iconColor: {type:String,default: 'blue'},
    titleClass: {type:String,default: 'blue--text'}
  }
}
</script>

<style>

</style>
