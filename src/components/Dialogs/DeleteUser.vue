<template>
    <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-title class="headline">Confirmar Exclusão</v-card-title>
      <v-card-text>
        Tem certeza de que deseja excluir o(a) usuário(a) <span style="color: red">{{ userToDelete.firstName }} {{ userToDelete.lastName }}</span>? Esta ação não pode ser desfeita.
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="blue" text @click="$emit('close')">Cancelar</v-btn>
        <v-btn color="red" @click="deleteUser">Deletar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
    userToDelete: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: this.dialogVisible,
    };
  },
  methods: {
    deleteUser() {
      if (this.userToDelete) {
        this.$store.dispatch('users/deleteUser', this.userToDelete.id);
        this.$toast.success('Usuário deletado com sucesso!', {
          position: 'top-right',
          timeout: 3000
        });
      }
      this.$emit('close');
    }
  },
  watch: {
    dialogVisible(val) {
      this.dialog = val;
    },
    dialog(val) {
      this.$emit('update:dialogVisible', val);
    },
  },
};
</script>
