import Vue from 'vue';
import Vuex from 'vuex';
import { fetchUsers, deleteUser, updateUser } from '@/services/apiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    currentPage: 1,
    maxEntriesPerPage: 10,
    totalEntries: 0,
    users: [],
    error: null
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setPagination(state, { page, total, limit }) {
      state.currentPage = page;
      state.totalEntries = total;
      state.maxEntriesPerPage = limit;
    },
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async loadUsers({ commit, state }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const data = await fetchUsers({ 
          page: state.currentPage, 
          limit: state.maxEntriesPerPage 
        });
        commit('setUsers', data.data);
        commit('setPagination', {
          page: data.page,
          total: data.total,
          limit: data.limit
        });
      } catch (error) {
        commit('setError', 'Failed to load users.');
        console.error('Error fetching users:', error);
      } finally {
        commit('setLoading', false);
      }
    },
    async deleteUser({ dispatch, commit }, userId) {
      try {
        await deleteUser(userId);
        dispatch('loadUsers');
      } catch (error) {
        commit('setError', 'Error deleting user.');
        console.error('Error deleting user:', error);
      }
    },
    async updateUser({ dispatch, commit }, { userId, updatedData }) {
      try {
        await updateUser(userId, updatedData);
        dispatch('loadUsers');
      } catch (error) {
        commit('setError', 'Error updating user.');
        console.error('Error updating user:', error);
      }
    }
  },
  getters: {
    allUsers: (state) => state.users,
    isLoading: (state) => state.loading,
    currentPage: (state) => state.currentPage,
    totalPages: (state) => Math.ceil(state.totalEntries / state.maxEntriesPerPage),
    errorMessage: (state) => state.error
  }
});
