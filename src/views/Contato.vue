<template>
  <div>
    <div v-if="load">
      <PageLoad/>
    </div>
    <transition> 
      <div v-if="data">
        <h1>{{data.titulo}}</h1>
        <p>
          {{data.descricao}}
          <ul>
            <li>
              <b>Email: </b>
              {{data.contato.email}}
            </li>
            <li>
              <b>Telefone: </b>
              {{data.contato.telefone}}
            </li>
            <li>
              <b>Endereço: </b>
              {{data.contato.endereco}}
            </li>
          </ul>
        </p>
      </div>
    </transition> 
  </div>
</template>
<script>
import data from "@/mixins/data.js"

export default {
  mixins: [data],
  created() {
    this.dataFetch('/contato') // Esta chamando do mixins
  }
}
</script>