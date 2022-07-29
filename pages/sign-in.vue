<template>
  <v-layout wrap justify-center align-center fill-height>
    <v-flex md6>
      <div class="form-login">
        <div class="text-center mb-6">
          <img
            width="120"
            src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"
          />
          <h2 class="display-1">Sign In</h2>
        </div>
        <v-text-field
          label="Email"
          append-icon="mdi-account-circle-outline" v-model="frm.email"
        ></v-text-field>
        <v-text-field
          label="Passoword"
          :type="!showPass ? 'password' : 'text'"
          @click:append="showPass = !showPass"
          append-icon="mdi-eye-off" v-model="frm.password"
        ></v-text-field>
        <v-btn @click.prevent="doLogin" color="primary" block>Sign in</v-btn>
      </div>
    </v-flex>
    <v-flex md6 class="blue lighten-5" fill-height>
      <v-layout justify-center align-center fill-height>
        <img src="@/assets/login.svg" alt="" class="img" />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      showPass: false,
      frm: {
        email: '',
        password:''
      }
    };
  },
  mounted() {
  },
  methods: {
    async doLogin() {
      try {
        let rs = await this.$axios.post('auth', this.frm)
        let { data } =  rs
        localStorage.setItem('user',JSON.stringify(data.user))
        localStorage.setItem('token',data.token)
        this.$toast('success')
        this.$router.push('/')
      } catch (error) {
         this.$toast.error('fail')
      }
    }
  },
};
</script>

<style>
.img {
  max-width: 100%;
  max-height: 400px;
}

.form-login {
  max-width: 400px;
  margin: 0 auto;
}
</style>
