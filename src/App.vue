<template>
  <v-app id="inspire">
    <navigation :mini="mini" :drawer="drawer" v-on:navigater="mini = !mini"></navigation>
    <toolbar :mini="mini" v-on:navigater="mini = !mini"></toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Navigation from '@/views/Layout/Navigation.vue'
  import Toolbar from '@/views/Layout/Toolbar.vue'
  export default {
    data: () => ({
      drawer: true,
      mini: false
    }),
    components: { Navigation, Toolbar },
    props: {
      source: String
    }
  }
</script>
