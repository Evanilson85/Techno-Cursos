<template>
  <div>
    <div v-if="load">
      <PageLoad/>
    </div>
    <transition> 
      <div v-if="data" class="conteudo"> 
        <div>
          <h1>{{data.nome}}</h1>
          <p>{{data.descricao}}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in data.aulas" :key="aula.id">
              <router-link :to="{name: 'aula', params:{aula: aula.id}}">
                {{aula.nome}}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition> 
  </div>
</template>

<script>
import data from "@/mixins/data.js"

export default {
  name: 'curso',
  props: ['curso'], // nome da rota  depois dos /:
  mixins:[data],
  created () {
    this.dataFetch(`/curso/${this.curso}`)
  }
}
</script>

<style scoped>
.aulas li a {
  display: block;
  box-shadow: 0 2px rgba(0, 0, 0, .1);
  background: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4b8;
  color:#fff !important;
}
</style>