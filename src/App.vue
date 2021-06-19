<template>
  <div id="app">
      <Header/>
      <router-view class="container"></router-view>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  padding: 0;
  color: #234;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-exact-active {
  color: #4b8 !important;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all .3s;
}

img {
  max-width: 100%;
}

.conteudo {
  display: block;
}

@media (min-width: 400px) {
  .conteudo {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 400px);
    grid-gap: 30px;
  }
}

</style>
