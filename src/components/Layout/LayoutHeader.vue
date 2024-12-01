<template>
    <v-app-bar app>
      <img alt="QuiteJa Logo" src="@/assets/logo.png" width="60">
      <v-toolbar-title>Teste prático QuiteJá</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
</template>
  
<script>
export default {
    name: 'LayoutHeader',
};    
</script>
  