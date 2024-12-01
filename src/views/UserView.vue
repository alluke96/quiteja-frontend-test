<template>
  <DefaultLayout>
    <!-- <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular> -->
    <v-container>
      <v-toolbar flat>
        <v-toolbar-title>Usuários</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
          @input="updateQueryParams"
        ></v-text-field>
      </v-toolbar>

      <v-data-table
        class="elevation-1"
        :headers="headers"
        :items="users"
        item-value="id"
        :loading="loading"
        :search="search"
        :server-items-length="total"
        :items-per-page="limit"
        @update:page="handlePageChange"
        @update:items-per-page="handleItemsPerPageChange"
        @update:sort-by="handleSortChange"
        @update:sort-desc="handleSortChange"
      >
        <template slot="item.picture" slot-scope="{ item }">
          <v-avatar size="35">
            <v-img :src="item.picture" :alt="item.firstName"></v-img>
          </v-avatar>
        </template>

        <template slot="item.actions" slot-scope="{ item }">
          <v-btn icon class="mr-2" @click="editUser(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteUser(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </DefaultLayout>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'UserList',
  components: {
    DefaultLayout,
  },
  data: () => ({
    headers: [
      { text: 'Avatar', value: 'picture', sortable: false },
      { text: 'Nome', value: 'firstName' },
      { text: 'Sobrenome', value: 'lastName' },
      { text: 'Ações', value: 'actions', align: 'end', sortable: false },
    ],
    search: '',
    sortBy: null,
    sortDesc: false, 
  }),
  computed: {
    ...mapState('users', {
      users: (state) => state.users,
      loading: (state) => state.loading,
      page: (state) => state.currentPage,
      limit: (state) => state.maxEntriesPerPage,
      total: (state) => state.totalEntries,
    }),
  },
  methods: {
    ...mapActions('users', ['loadUsers']),
    ...mapMutations('users', ['setPagination']),
    
    handlePageChange(newPage) {
      this.setPagination({ page: newPage, total: this.total, limit: this.limit });
      this.updateQueryParams();
    },

    handleSortChange(sortBy) {
      this.sortBy = sortBy;
      this.sortDesc = !this.sortDesc;
      this.updateQueryParams();
    },

    handleItemsPerPageChange(limit) {
      this.setPagination({ page: this.page, total: this.total, limit: limit });
      this.updateQueryParams();
    },

    updateQueryParams() {
      const query = {
        page: this.page,
        limit: this.limit,
        search: this.search || undefined,
      };
      this.$router.push({ query });
      this.loadUsers();
    },

    editUser(item) {
      console.log(item);
    },
    
    deleteUser(item) {
      console.log(item);
    }
  },
  created() {
    const { page = 1, limit = 10 } = this.$route.query;
    this.setPagination({ page: Number(page), total: this.total, limit: Number(limit) });
    this.loadUsers();
  },
};
</script>
