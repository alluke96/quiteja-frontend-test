<template>
    <v-app>
        <Sidebar />
        <v-main>
            <Header />
            <v-container>
                <slot></slot> <!-- Aqui será renderizado o conteúdo de cada página -->
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import Sidebar from '@/components/Layout/LayoutSidebar.vue';
import Header from '@/components/Layout/LayoutHeader.vue';

export default {
    name: 'DefaultLayout',
    components: {
        Sidebar,
        Header,
    },
};
</script>

  