<template>
  <div class="auth-form">
    <div class="container">
      <form @submit.prevent="login" class="card-panel">
        <AuthLogo/>
        <h2 class="grey-text text-lighten-3 center">Login</h2>
        <p class="center grey-text text-lighten-2">Welcome back!</p>
        <div class="field">
          <label class="grey-text" for="email">Email:</label>
          <input
            class="grey-text text-lighten-4"
            type="email"
            name="email"
            v-model="formData.email"
          >
          <p class="error-text red-text" v-if="errors.email">{{errors.email}}</p>
        </div>
        <div class="field">
          <label class="grey-text" for="password">Password:</label>
          <input
            class="grey-text text-lighten-4"
            type="password"
            name="password"
            v-model="formData.password"
            autocomplete="off"
          >
          <p class="error-text red-text" v-if="errors.password">{{errors.password}}</p>
        </div>
        <div class="field center">
          <button
            class="btn-large waves-effect waves-light green darken-3"
            @click.prevent="login"
          >Let's Go</button>
          <p class="error-text red-text" v-if="errors.login">{{errors.login}}</p>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import debounce from 'lodash/debounce'
// import db from '@/firebase/init'
import firebase from 'firebase'
import { EMAIL, PASSWORD } from '@/utils/regex-patterns'
import AuthLogo from '@/components/auth/AuthLogo'

export default {
  name: 'Login',
  components: { AuthLogo },
  data() {
    return {
      foo: 'bar',
      formData: {
        email: null,
        password: null,
      },
      errors: {
        email: null,
        password: null,
        login: null,
      },
    }
  },
  methods: {
    validateForm() {
      let result = true
      const { email, password } = this.formData
      if (!email || !email.match(EMAIL)) {
        this.errors.email = 'Please enter your email.'
        result = false
      }
      if (!password) {
        this.errors.password = 'Please enter your password.'
        result = false
      }

      return result
    },
    login: debounce(async function $login() {
      const { email, password } = this.formData

      const valid = this.validateForm()

      if (valid) {
        console.debug('Logging in.', this.formData)
        try {
          const cred = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
          const { user } = cred
          console.debug(`logged in as user ${user.uid}`)
          this.$router.push({ name: 'Map' })
        } catch (error) {
          alert('could not login!')
          console.error(error)
          this.errors.email = null
          this.errors.password = null
          this.errors.login = error.message
        }
      } else {
        console.error('Cannot log in', this.errors)
      }
    }, 500),
  },
}
</script>


<style lang="scss">
@import './auth-form.scss';
</style>
