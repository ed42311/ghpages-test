<template>
  <div class="meow display-flex flexbox-center flex-direction-column">
    <h1>Hello</h1>
    <div class="meow display-flex flex-direction-row flex-justify-space-around"> 
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/other">Other</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        items: [
          {
            title: 'Home',
            icon: 'dashboard',
            click: this.$router.push('/'),
            path: '/'
          },
          {
            title: 'About',
            icon: 'book',
            click: this.$router.push('/about'),
            path: '/about'
          },
          {
            title: 'Other',
            icon: 'account_box',
            click: this.$router.push('/other'),
            path: '/other'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .meow {
    background-color: #1C448E;
    width: 100vw;
  }
</style>
