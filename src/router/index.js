import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Curso from '../views/Curso.vue'
import CursoId from '../views/CursoId.vue'
import Aula from "../views/Aula.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Contato",
      name: "Contato",
      component: Contato,
    },
    {
      path: "/Curso",
      name: "Curso",
      component: Curso,
    },
    {
      path: "/Curso/:curso",
      name: "CursoId",
      component: CursoId,
      props: true, // me passa o nome da rota dinamica exemplo :curso
      children: [
        {
          path: ':aula',
          name: 'aula',
          component: Aula,
          props: true
        }
      ]
    },
  ],
});

export default router
