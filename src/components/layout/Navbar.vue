<template>
  <div class="navbar">
    <nav class="gray darken-4 bumpmap-navbar">
      <div class="container">
        <div class="brand-logo left">
          <router-link :to="{name: 'Map'}">
            <img
              class="brand-logo-emblem"
              src="/static/logo/emblem-dark@0.5x.png"
              alt="bumpmap logo"
            >
            <img class="brand-logo-image" src="/static/logo/bumpmap-light.svg" alt="bumpmap">
          </router-link>
          <span class="version">
            <span class="version-label">v</span>
            <span class="version-number">{{version}}</span>
            <span class="version-release" v-if="release.phase">{{release.phase}}</span>
          </span>
        </div>

        <ul class="right">
          <li>
            <router-link :to="{name: 'Join'}">Join</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Login'}">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import bumpmapAppData from '@/utils/app-data'

export default {
  name: 'Navbar',
  data() {
    const { version, release } = bumpmapAppData
    return {
      version,
      release,
    }
  },
}
</script>

<style lang="scss">
.navbar {
  img {
  }

  .brand-logo-emblem {
    height: 42px;
    position: relative;
    top: 8px;
    @media screen and (max-width: 768px) {
      height: 30px;
      top: 3px;
    }
  }

  .brand-logo-image {
    height: 40px;
    position: relative;
    top: 8.5px;
    left: -5px;
    @media screen and (max-width: 768px) {
      height: 24px;
      top: 0px;
    }
  }

  .brand-logo-image,
  .brand-logo-emblem {
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
}
</style>
