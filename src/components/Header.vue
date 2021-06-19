<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li> 
          <router-link :to="{name: 'Curso'}">Curso</router-link>
        </li>
        <li> 
          <router-link :to="{name: 'Contato'}">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style scoped>
header {
  background: #234;
}

header a  {
  color: #fff;
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.logo {
  flex: 1;
}

.logo a {
  color: rgb(255, 255, 255);
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}

a.router-link-exact-active {
  color: #4b8 !important;
}
</style>