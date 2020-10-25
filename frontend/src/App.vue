<template>
  <v-app>
    <v-main>
      <Login :component="this" v-if="!log" />
      <Home :App="this" v-else />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Login: () => import("./views/Login"),
    Home: () => import("./views/Home"),
  },
  data: () => ({ socket: Object(), user: Object(), log: false }),
  mounted() {},
};
</script>


<style  scoped>
* {
  margin: 0;
  padding: 0;
}
</style>