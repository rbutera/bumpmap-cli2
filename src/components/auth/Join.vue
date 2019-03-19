<template>
  <div class="join">
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
          <button class="btn grey darken-3" @click.prevent="signup">Join</button>
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
          'Please choose an alias/username. You can choose to post anonymously or with your chosen username.'
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
.join {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.9);

  .card-panel {
    max-width: 500px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  .field {
    margin-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
  }

  h2 {
    font-size: 3em;
    margin-bottom: 1em;
    margin-top: 0;
  }

  .error-text {
    font-size: 0.8em;
    font-weight: 500;
  }

  img.geobump-logo {
    height: 90px;
    position: relative;
    margin: 0;
    left: -5 / px;
    top: 29px;
  }
}
</style>