<template>
  <v-row class="py-10" align="center" justify="center">
    <ImageInput v-model="image" />
    <CandidatesVotes class="pa-7"/>
  </v-row>
</template>

<script>
export default {
    data() {
        return {
            image: undefined
        };
    },
}
</script>

<style>

</style>