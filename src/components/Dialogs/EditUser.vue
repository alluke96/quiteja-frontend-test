<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Editar Usuário</span>
      </v-card-title>

      <v-card-text>
        <v-form v-model="formValid">
          <!-- Informações básicas -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.firstName"
                label="Primeiro Nome"
                :rules="[v => !!v || 'Este campo é obrigatório', v => (v.length >= 2 && v.length <= 50) || 'O nome deve ter entre 2 e 50 caracteres']"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.lastName"
                label="Sobrenome"
                :rules="[v => !!v || 'Este campo é obrigatório', v => (v.length >= 2 && v.length <= 50) || 'O sobrenome deve ter entre 2 e 50 caracteres']"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                v-model="user.title"
                :items="['mr', 'ms', 'mrs', 'miss', 'dr']"
                label="Título"
                :rules="[v => !!v || 'Este campo é obrigatório']"
                required
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="user.gender"
                :items="['male', 'female', 'other']"
                label="Gênero"
                :rules="[v => !!v || 'Este campo é obrigatório']"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.email"
                label="E-mail"
                :rules="[
                  v => !!v || 'Este campo é obrigatório',
                  v => /.+@.+\..+/.test(v) || 'E-mail inválido'
                ]"
                required
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.phone"
                label="Telefone"
                :mask="'(###) ###-####'"
                :rules="[v => !!v || 'Este campo é obrigatório']"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.dateOfBirth"
                label="Data de Nascimento"
                :rules="[v => !!v || 'Este campo é obrigatório']"
                required
                :type="'date'"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.picture"
                label="URL da Imagem"
                :rules="[v => !!v || 'Este campo é obrigatório']"
                required
              />
            </v-col>
          </v-row>

          <!-- Endereço -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.location.street"
                label="Rua"
                :rules="[v => !!v || 'Este campo é obrigatório', v => (v.length >= 5 && v.length <= 100) || 'A rua deve ter entre 5 e 100 caracteres']"
                required
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.location.city"
                label="Cidade"
                :rules="[v => !!v || 'Este campo é obrigatório', v => (v.length >= 2 && v.length <= 30) || 'A cidade deve ter entre 2 e 30 caracteres']"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.location.state"
                label="Estado"
                :rules="[v => !!v || 'Este campo é obrigatório', v => (v.length >= 2 && v.length <= 30) || 'O estado deve ter entre 2 e 30 caracteres']"
                required
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.location.country"
                label="País"
                :rules="[v => !!v || 'Este campo é obrigatório', v => (v.length >= 2 && v.length <= 30) || 'O país deve ter entre 2 e 30 caracteres']"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.location.timezone"
                label="Fuso Horário"
                :rules="[v => !!v || 'Este campo é obrigatório']"
                required
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue" text @click="$emit('close')">Cancelar</v-btn>
        <v-btn color="blue darken-1" :disabled="!formValid" @click="saveUser">Salvar</v-btn>
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
    userToEdit: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: this.dialogVisible,
      formValid: false,
      user: {
        firstName: '',
        lastName: '',
        title: '',
        gender: '',
        email: '',
        dateOfBirth: '',
        phone: '',
        picture: '',
        location: {
          street: '',
          city: '',
          state: '',
          country: '',
          timezone: '',
        },
      },
    };
  },
  methods: {
    saveUser() {
      console.log('Usuário salvo:', this.user);
      this.$emit('close');
    },
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
