<template>
  <v-navigation-drawer
    app
    permanent
    mini-variant
    expand-on-hover
    class="green accent-4"
  >
    <v-list dense>
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        router-link
        exact
        :class="{ 'v-list-item--active': isActive(item.route) }"
      >
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
        { title: 'Home', route: '/' },
        { title: 'Usuários', route: '/usuarios' },
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
