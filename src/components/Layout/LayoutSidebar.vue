<template>
  <v-navigation-drawer
    app
    dark
    permanent
    mini-variant
    expand-on-hover
    class="teal darken-1 pa-0"
  >
    <v-list dense nav class="py-4">
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        router-link
        exact
        :class="{ 'v-list-item--active': isActive(item.route) }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LayoutSidebar',
  data() {
    return {
      navItems: [
      { title: 'Home', route: '/', icon: 'mdi-home' },
      { title: 'Usuários', route: '/usuarios', icon: 'mdi-account-group' },
        // Adicionar mais itens conforme necessário
      ],
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
