<template>
 <div>
    <div v-if="load">
      <PageLoad/>
    </div>
    <transition> 
      <div v-if="data"  class="conteudo">
        <div>
          <h1>{{data.titulo}}</h1>
          <p>{{data.descricao}}</p>
        </div>
          <ul>
            <li v-for="curso in data.cursos" :key="curso.id">
            <router-link :to="{name: 'CursoId', params: {curso: curso.id}}">
                <h2>{{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}}</h2>
            </router-link>
              <p>{{curso.descricao}}</p>
            </li>
          </ul>
      </div>
    </transition> 
 </div>
</template>
<script>
import data from "@/mixins/data.js"

export default {
  mixins:[data],
  created () {
    this.dataFetch('/cursos')
  }
}
</script>

<style scoped>
ul li {
  margin: 0 0 40px;
}
</style>