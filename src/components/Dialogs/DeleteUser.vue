<template>
    <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-title class="headline">Confirmar Exclusão</v-card-title>
      <v-card-text>
        Tem certeza de que deseja excluir este usuário? Esta ação não pode ser desfeita.
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$emit('close')" color="grey" text>Cancelar</v-btn>
        
        <v-btn @click="deleteUser" color="red" text>Deletar</v-btn>
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
