<template>
  <div class="navbar">
    <nav class="gray darken-4 geobump-navbar">
      <div class="container">
        <div class="brand-logo left">
          <router-link :to="{name: 'Map'}">
            <img class="brand-logo-emblem" src="/static/logo/emblem-light.svg" alt="geobump logo">
            <img class="brand-logo-image" src="/static/logo/geobump-light.svg" alt="geobump">
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
import geobumpAppData from '@/lib/app-data'
export default {
  name: 'Navbar',
  data() {
    const { version, release } = geobumpAppData
    return {
      version,
      release,
    }
  },
}
</script>

<style lang="scss">
.navbar {
  .brand-logo-emblem {
    height: 30px;
  }

  .brand-logo-image {
    height: 40px;
    position: relative;
    top: 7px;
  }

  .brand-logo-image,
  .brand-logo-emblem {
    margin: 0;
    padding: 0;
  }

  .gray.darken-4.geobump-navbar {
    background-color: rgba(20, 20, 20, 0.8);
  }

  .brand-logo {
    user-select: none;
    .version {
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
