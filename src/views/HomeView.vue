<template>
  <div class="home">
    <particles-bg type="cobweb" :bg="true" style="z-index: 0; opacity: 0.3;" />

    <v-container>
      <img alt="QuiteJa Logo" src="@/assets/logo.png">
  
      <div class="flex-center">
        <v-card dark max-width="400" class="mx-auto" color="#015F6B">
          <v-card-title>
            Bem-vindo(a) ao teste do Allyson!
          </v-card-title>
  
          <v-card-text>
            Para acessar a tela de usuários, clique no botão abaixo
          </v-card-text>
  
          <v-divider class="my-4"></v-divider>
  
          <v-card-actions>
            <v-btn light large color="#00E38A" @click="goToUsersPage">Usuários</v-btn>
          </v-card-actions>
        </v-card>
      </div>
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

<style scoped>
.flex-center,
.flex-center * {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  text-align: center;
}

.home {
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background: linear-gradient(to bottom, #FFF, #CCC);
}
</style>