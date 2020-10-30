<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="less">
@import './assets/less/reset';
@import './assets/less/config';
@import './assets/less/button';
</style>
