<template>
  <div class="navbar">
    <nav class="grey darken-4">
      <div class="container">
        <a href="/" class="brand-logo left">
          <img
            class="brand-logo-image"
            src="/static/logo/geobump-light.svg"
            height="50"
            alt="geobump"
          >
        </a>
        <ul class="right">
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.navbar {
  .brand-logo-image {
    position: relative;
    top: 10px;
  }
}
</style>
