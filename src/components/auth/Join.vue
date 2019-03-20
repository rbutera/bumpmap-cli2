<template>
  <div class="auth-form">
    <div class="container">
      <form @submit.prevent="signup" class="card-panel" @keyup="validateForm">
        <h2 class="center">
          Join
          <img class="geobump-logo" src="/static/logo/geobump.svg" alt="geobump">
        </h2>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="formData.email">
          <p class="error-text red-text" v-if="errors.email">{{errors.email}}</p>
        </div>
        <div class="field">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="formData.password" autocomplete="off">
          <p class="error-text red-text" v-if="errors.password">{{errors.password}}</p>
        </div>
        <div class="field">
          <label for="password">Confirm Password:</label>
          <input type="password" name="confirm" v-model="formData.confirm" autocomplete="off">
          <p class="error-text red-text" v-if="errors.confirm">{{errors.confirm}}</p>
        </div>
        <div class="field">
          <label for="alias">Alias:</label>
          <input type="text" name="alias" v-model="formData.alias" autocomplete="off">
          <p class="error-text red-text" v-if="errors.alias">{{errors.alias}}</p>
        </div>
        <div class="field center">
          <button
            class="btn-large waves-effect waves-light green darken-3"
            @click.prevent="signup"
          >Join</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'join',
  data() {
    return {
      foo: 'bar',
      formData: {
        email: null,
        password: null,
        confirm: null,
        alias: null,
      },
      errors: {
        email: null,
        password: null,
        confirm: null,
        alias: null,
      },
    }
  },
  methods: {
    validateForm(event) {
      let result = true
      const { email, password, confirm, alias } = this.formData
      if (!email) {
        this.errors.email = 'Please enter your email.'
        result = false
      } else {
        this.errors.email = null
      }

      if (!password) {
        this.errors.password = 'Please enter your password.'
        result = false
      } else {
        this.errors.password = null
      }

      if (!confirm) {
        this.errors.confirm = 'Please repeat your chosen password.'
        result = false
      } else if (password !== confirm) {
        this.errors.password =
          'Does not match below! Please enter your password again.'
        this.errors.confirm = 'Does not match above! Please try again.'
        result = false
      } else {
        this.errors.confirm = null
      }

      if (!alias) {
        this.errors.alias =
          'Please choose an alias/username. You will be able to post anonymously and with your chosen username.'
        result = false
      } else {
        this.errors.alias = null
      }

      return result
    },
    signup() {
      const valid = this.validateForm()
      if (valid) {
        console.debug('Signing up.', this.formData)
      } else {
        console.error('Will not signup', this.formData, this.errors)
      }
    },
  },
}
</script>


<style lang="scss">
@import './auth-form.scss';
</style>