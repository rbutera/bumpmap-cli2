<template>
  <div class="navbar">
    <nav class="gray darken-4 geobump-navbar">
      <div class="container">
        <router-link :to="{name: 'Map'}" class="brand-logo left">
          <img
            class="brand-logo-emblem"
            src="/static/logo/emblem-light.svg"
            height="30"
            alt="geobump logo"
          >
          <img
            class="brand-logo-image"
            src="/static/logo/geobump-light.svg"
            height="50"
            alt="geobump"
          >
        </router-link>
        <span class="left version">v{{version}}</span>
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
    const { version } = geobumpAppData
    return {
      version,
    }
  },
}
</script>

<style lang="scss">
.navbar {
  .brand-logo-image {
    position: relative;
    top: 10px;
  }

  .brand-logo-image,
  .brand-logo-emblem {
    margin: 0;
    padding: 0;
  }

  .gray.darken-4.geobump-navbar {
    background-color: rgba(50, 50, 50, 0.8);
  }
}
</style>
