<template>
  <div>
    <v-container grid-list-xs>
      <h3>Add doc</h3>
      <v-text-field
        label="Title" v-model="frm.title"
      ></v-text-field>
      <v-textarea label="Description" rows="3" v-model="frm.description"></v-textarea>

      <v-btn @click="$router.back()" color="error">cancel</v-btn>
      <v-btn @click.prevent="addDoc" :loading="loading" color="primary">add</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      frm: {
        title: '',
        description:''
      }
    }
  },
  methods: {
    async addDoc() {
      try {
        this.loading = true
        let rs = await this.$axios.post('doc', {
          doc: this.frm
        })
        this.$toast.info(rs.data.message)
        this.loading  = false
        this.$router.back()
      } catch (error) {
        this.loading = false
        this.$toast.error(`${error}`)
      }
    }
  },
}
</script>

<style>

</style>