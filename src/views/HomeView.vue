<template>
  <div class="home">
    <particles-bg type="cobweb" :bg="true" />
    
    <v-container>
      <img alt="QuiteJa Logo" src="@/assets/logo.png">
  
      <v-btn @click="goToUsersPage">Usuários</v-btn>
    </v-container>
  </div>
</template>

<script>
import router from '../router';
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'HomeView',
  components: {
    ParticlesBg
  },
  methods: {
    goToUsersPage() {
      router.push({ name: 'Usuários', query: { page: 1, limit: 10 } })
    },
  },
}
</script>
