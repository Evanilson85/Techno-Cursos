<template>
  <div>
    <div v-if="load">
      <PageLoad/>
    </div>
    <transition> 
      <div v-if="data" class="conteudo"> 
        <div>
          <h2>{{data.nome}}</h2>
          <div class="video">
            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${data.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </transition> 
  </div>
</template>

<script>
import data from "@/mixins/data.js"

export default {
  name: 'aula',
  props: ['aula'],
  mixins:[data],
  created () {
    this.dataFetch(`/aula/${this.aula}`)
  },
  beforeRouteUpdate(to, from, next) {
    this.dataFetch(`/aula/${to.params.aula}`)
    next()
  }
} 
</script>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
/* 
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
} */
</style>