<template>
  <div class="auth-form white-text">
    <div class="container">
      <form @submit.prevent="signup" class="card-panel" @keyup="validateForm">
        <AuthLogo/>
        <h2 class="center">Join</h2>
        <div class="field">
          <label class="grey-text" for="email">Email:</label>
          <input
            class="grey-text text-lighten-4"
            type="email"
            name="email"
            @change="generateAlias(formData.email)"
            @keyup="generateAlias(formData.email)"
            v-model="formData.email"
          >
          <p class="error-text red-text text-lighten-1" v-if="errors.email">{{errors.email}}</p>
        </div>
        <div class="field">
          <label class="grey-text" for="alias">Alias:</label>
          <input
            class="grey-text text-lighten-4"
            type="text"
            name="alias"
            @focus="dirty.alias = true"
            @blur="dirty.alias = !!formData.alias"
            @change="validateForm"
            v-model="formData.alias"
            autocomplete="off"
          >
          <p class="error-text red-text text-lighten-1" v-if="errors.alias">{{errors.alias}}</p>
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
          <p class="error-text red-text text-lighten-1" v-if="errors.password">{{errors.password}}</p>
        </div>
        <div class="field">
          <label class="grey-text" for="password">Confirm Password:</label>
          <input
            class="grey-text text-lighten-4"
            type="password"
            name="confirm"
            v-model="formData.confirm"
            autocomplete="off"
          >
          <p class="error-text red-text text-lighten-1" v-if="errors.confirm">{{errors.confirm}}</p>
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
import { contains, startsWith, endsWith } from 'rambda'
import debounce from 'lodash/debounce'
import { toSlug } from '@/utils/alias'
import { db } from '@/firebase/init'
import firebase from 'firebase'
import { EMAIL, ALIAS, PASSWORD } from '@/utils/regex-patterns'
import AuthLogo from '@/components/auth/AuthLogo'

export default {
  name: 'join',
  components: {
    AuthLogo,
  },
  data() {
    return {
      foo: 'bar',
      formData: {
        email: null,
        password: null,
        confirm: null,
        alias: null,
      },
      dirty: {
        alias: false,
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
    async aliasIsAvailable(alias) {
      console.debug('aliasIsAvailable?')
      const slug = toSlug(alias)
      const ref = db.collection('users').doc(slug)
      const doc = await ref.get()
      return !doc.exists
    },
    generateAlias(email) {
      let result = ''
      if (email && contains('@', email) && !startsWith('@', email)) {
        const [emailHead] = email.split('@')
        result = emailHead
      }
      if (!this.dirty.alias) {
        this.formData.alias = result
      }
      return result
    },
    validateForm: debounce(async function $validate() {
      let result = true
      console.log(this)
      const { email, password, confirm, alias } = this.formData
      if (!email) {
        this.errors.email = 'Please enter your email.'
        result = false
      } else if (!email.match(EMAIL)) {
        this.errors.email = 'Please enter a valid email.'
        result = false
      } else {
        this.errors.email = null
      }

      if (!password) {
        this.errors.password = 'Please enter your password.'
        result = false
      } else if (!password.match(PASSWORD)) {
        this.errors.password =
          'Please enter a password with at least 8 characters and at least 3 of the following: uppercase letters, lowercase letters, numbers, and special characters.'
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
      } else if (alias.length < 3) {
        this.errors.alias = 'Please choose an alias with at least 3 characters'
        result = false
      } else if (alias.length > 24) {
        this.errors.alias =
          'Please choose an alias with no more than 24 characters'
        result = false
      } else if (
        startsWith('_')(alias) ||
        startsWith(' ')(alias) ||
        endsWith('_')(alias) ||
        endsWith(' ')(alias)
      ) {
        this.errors.alias = 'Cannot start or end with a space or underscore'
      } else if (
        contains('  ')(alias) ||
        contains('__')(alias) ||
        contains('..')(alias)
      ) {
        this.errors.alias =
          'Cannot use two spaces, dots, or underscores in a row'
      } else if (!alias.match(ALIAS)) {
        this.errors.alias =
          "Only letters, numbers, spaces, dots ('.') and underscores ('_') allowed"
        result = false
      } else {
        this.errors.alias = null
        console.debug('alias valid. checking if available')
        const available = await this.aliasIsAvailable(alias)
        if (available) {
          this.errors.alias = null
          console.debug('alias is AVAILABLE!')
        } else {
          this.errors.alias = 'Sorry, that Alias has already been taken.'
          console.error('alias is NOT AVAILABLE!')
        }
      }

      return result
    }, 500),
    async signup() {
      const valid = await this.validateForm()
      const { email, alias, password } = this.formData

      if (valid && !!email && !!alias && !!password) {
        const slug = toSlug(alias)
        const ref = db.collection('users').doc(slug)
        try {
          const cred = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
          console.debug('cred', cred)
          console.table(cred)
          const { user } = cred
          console.debug('user', user)
          const newUserData = {
            alias,
            home: null,
            user_id: user.uid,
          }

          console.debug('newUserData:', newUserData)

          const done = await ref.set(newUserData)
          console.debug('done', done)
          this.$router.push({ name: 'Map' })
        } catch (e) {
          alert('Signup Error')
          console.error(e)
        }
      } else {
        console.error('Cannot signup:', this.errors)
      }
    },
  },
}
</script>


<style lang="scss">
@import './auth-form.scss';
</style>
