<template>
  <div class="auth-logo center">
    <img class="center bumpmap-emblem" src="/static/logo/emblem-dark.png" alt="bumpmap logo">
    <img class="center bumpmap-logo" src="/static/logo/bumpmap-light.svg" alt="bumpmap.org">
  </div>
</template>

<script>
export default {
  name: 'AuthLogo',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.auth-logo {
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
  img {
    margin: 0 auto;
  }
  .bumpmap-logo {
    height: 50px;
    display: block;
  }
  .bumpmap-emblem {
    height: 100px;
    display: block;
  }
}
</style>
