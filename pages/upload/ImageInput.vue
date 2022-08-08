<template>
  <v-card rounded="lg" class="overflow-hidden" width="300" height="300" @click.stop="selectImage">
    <input id="fileInput" class="d-none" type="file" accept="image/*" @input="updateValue">
    <v-fade-transition mode="out-in">
      <v-img v-if="image" aspect-ratio="1" :src="image">
        <v-row class="fill-height" align="end" justify="center">
          <v-slide-y-reverse-transition>
            <v-sheet v-if="mask" color="error" width="100%" height="100%" class="mask" />
          </v-slide-y-reverse-transition>
          <v-btn
            class="mb-3"
            fab
            x-small
            color="error"
            @click.stop="deleteImage"
            @mouseenter="mask=true"
            @mouseleave="mask=false"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </v-img>
      <v-row v-else class="d-flex flex-column align-center justify-center fill-height">
        <v-icon>
          mdi-paperclip
        </v-icon>
        <span class="mt-3">Select an Image</span>
      </v-row>
    </v-fade-transition>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      input: undefined,
      image: undefined,
      imageFile: undefined,
      mask: false
    }
  },
  mounted () {
    this.input = document.getElementById('fileInput')
  },
  methods: {
    selectImage () {
      if (!this.imageFile) {
        this.input.click()
      }
    },
    updateValue (event) {
      this.imageFile = event.target.files[0]
      this.image = this.imageFile ? URL.createObjectURL(this.imageFile) : undefined
      this.$emit('input', this.imageFile)
    },
    deleteImage () {
      if (this.imageFile) {
        this.imageFile = undefined
        this.image = undefined
        this.mask = false
        this.input.value = '' // <-- this will fix the issue
        this.$emit('input', undefined)
      }
    }
  }
}
</script>

<style scoped>
.mask{
    position: absolute;
    mask-image: radial-gradient(circle at bottom, rgba(0,0,0,0.3) 10%, transparent  50%);
}
</style>