<template>
  <div class="navbar">
    <nav class="gray darken-4 geobump-navbar">
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

  .gray.darken-4.geobump-navbar {
    background-color: rgba(50, 50, 50, 0.8);
  }
}
</style>
