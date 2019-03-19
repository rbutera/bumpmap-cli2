<template>
  <div class="login">
    <div class="container">
      <form @submit.prevent="login" class="card-panel">
        <h2 class="center">
          Login to
          <img class="geobump-logo" src="/static/logo/geobump.svg" alt="geobump">
        </h2>
        <p class="center grey-text-darken-2">Welcome back!</p>
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
        <div class="field center">
          <button class="btn grey darken-3" @click.prevent="login">Let's Go</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Login',
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
      },
    }
  },
  methods: {
    validateForm(event) {
      let result = true
      const { email, password } = this.formData
      if (!email) {
        this.errors.email = 'Please enter your email.'
        result = false
      }
      if (!password) {
        this.errors.password = 'Please enter your password.'
        result = false
      }

      return result
    },
    login() {
      const { email, password } = this.formData

      const valid = this.validateForm()

      if (valid) {
        console.debug('Logging in.', this.formData)
        alert('Logging in')
      } else {
        console.error('Cannot log in', this.errors)
      }
    },
  },
}
</script>


<style lang="scss">
.login {
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

  h2 {
    font-size: 3em;
    margin-bottom: 1em;
    margin-top: 0;
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