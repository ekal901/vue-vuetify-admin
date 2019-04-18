<template>
  <v-app dark>
    <v-content flat>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex x12 sm8 md4 lg3>

            <v-toolbar color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
              <LangSelect></LangSelect>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="loginForm.userid"
                  v-validate="'required|email'"
                  :error-messages="errors.collect('email')"
                  data-vv-name="email"
                  prepend-icon="person"
                  name="userid"
                  label="Userid"
                  type="text"
                  ref="userid"
                >
                </v-text-field>
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <v-text-field
                  v-model="loginForm.password"
                  v-validate="'required|min:4'"
                  :error-messages="errors.collect('password')"
                  data-vv-name="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  ref="password"
                >
                </v-text-field>
                 <i v-show="errors.has('password')" class="fa fa-warning"></i>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn
                block color="primary"
                @click="submit"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LangSelect from '@/components/LangSelect'
export default {
  name: 'Login',
  components: {
    LangSelect
  },
  data: () => ({
    loginForm: {
      userid: '',
      password: ''
    }
  }),
  watch: {
    $route: {
      handler: function (route) {
        console.log('watch $route : login/index.vue router')
        console.log(route)
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted () {
    if (this.loginForm.userid === '') {
      this.$refs.userid.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    // this.$validator.localize('en', this.dictionary)
  },
  methods: {
    submit (event) {
      event.preventDefault()
      this.$validator.validateAll().then((result) => {
        console.log(result)
      })
    }
  }
}
</script>
