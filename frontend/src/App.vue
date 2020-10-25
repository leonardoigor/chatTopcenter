<template>
  <v-app>
    <v-main>
      <Login :component="this" v-if="!log" />
      <Home :component="this" v-else />
    </v-main>
  </v-app>
</template>

<script>
import Io from "socket.io-client";

export default {
  name: "App",

  components: {
    Login: () => import("./views/Login"),
    Home: () => import("./views/Home"),
  },
  data: () => ({ socket: Object(), user: Object(), log: true }),
  mounted() {
    this.socket = Io(":3333");
  },
};
</script>


<style  scoped>
* {
  margin: 0;
  padding: 0;
}
</style>