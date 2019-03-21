<template>
  <div class="navbar">
    <nav class="gray darken-4 bumpmap-navbar">
      <div class="container">
        <div class="brand-logo left">
          <router-link :to="{name: 'Map'}">
            <div class="brand-logo-wrapper">
              <img class="emblem" src="/static/logo/emblem-dark@0.5x.png" alt="bumpmap logo">
              <img class="logotext" src="/static/logo/bumpmap-light.svg" alt="bumpmap">
            </div>
          </router-link>
          <span class="version">
            <span class="version-label">v</span>
            <span class="version-number">{{version}}</span>
            <span class="version-release" v-if="release.phase">{{release.phase}}</span>
          </span>
        </div>

        <ul class="right">
          <li class="user-email" v-if="user">{{user.email}}</li>
          <li v-if="!user">
            <router-link :to="{name: 'Join'}">Join</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{name: 'Login'}">Login</router-link>
          </li>
          <li v-if="user">
            <a @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import bumpmapAppData from '@/utils/app-data'

export default {
  name: 'Navbar',
  data() {
    const { version, release } = bumpmapAppData
    return {
      version,
      release,
      user: null,
    }
  },
  methods: {
    async logout() {
      const result = await firebase.auth().signOut()
      this.$router.push({ name: 'Login' })
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  },
}
</script>

<style lang="scss">
.navbar {
  .brand-logo-wrapper {
    transition: all 0.2s ease-in-out;
    &:hover {
      .emblem {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
      }
      .logotext {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
        left: 0px;
      }
    }
  }
  .emblem {
    height: 42px;
    position: relative;
    top: 8px;
    @media screen and (max-width: 768px) {
      height: 30px;
      top: 3px;
    }
  }

  .logotext {
    height: 40px;
    position: relative;
    top: 8.5px;
    left: -5px;
    @media screen and (max-width: 768px) {
      height: 24px;
      top: 0px;
    }
  }

  .logotext,
  .emblem {
    margin: 0;
    padding: 0;
  }

  .gray.darken-4.bumpmap-navbar {
    background-color: rgba(20, 20, 20, 0.8);
  }

  .brand-logo {
    user-select: none;
    .version {
      @media screen and (max-width: 768px) {
        display: none;
        top: 6px;
        transform: scale(0.6);
      }
      cursor: help;
      display: inline-block;
      margin: 0;
      padding: 0;
      font-size: 0.5em;
      font-weight: 150;
      line-height: 64px;
      vertical-align: top;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.25);
      user-select: none;
    }
    .version-number,
    .version-label {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
    .version-label {
      color: rgba(255, 255, 255, 0.15);
      font-size: 0.9em;
    }
    .version-number {
      margin-left: -5px;
    }
    .version-release {
      font-size: 0.75em;
      font-weight: 500;
      letter-spacing: 0px;
    }
  }

  .user-email {
    position: relative;
    top: 2px;
    user-select: none;
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.5);
    margin-right: 20px;
    @media screen and (max-width: 768px) {
      display: none;
      top: 6px;
      transform: scale(0.6);
    }
  }
}
</style>
