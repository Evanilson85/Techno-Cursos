<template>
  <div>
    <div v-if="load">
      <PageLoad/>
    </div>
    <transition> 
      <div v-if="data" class="conteudo">
        <div>
          <h1>Sobre a {{data.titulo}}</h1>
          <p>{{data.descricao}}</p>
          <router-link tag="button" class="btn" to="/curso" >Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="(dados, index) in data.avaliacoes" :key="index">
                <p>{{dados.nome}}</p>
                <p>{{dados.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="aprender">
      </div>
    </transition>
  </div>
</template>

<script>
import data from "@/mixins/data.js"
export default {
  name: 'Home',
  mixins: [data],
  created() {
    this.dataFetch('/home')
  }
}
</script>

<style>

.btn {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  font-size: 1rem;
  margin: 10px 0 40px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}

</style>