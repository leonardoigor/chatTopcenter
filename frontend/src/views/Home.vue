import Io from 'socket.io-client';
<template>
  <div class="home">
    <v-row>
      <v-col> <UsersList /> </v-col>
      <v-col> <UsersList /> </v-col>
      <v-col> <UsersList /> </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    UsersList: () => import("./../components/UsersList"),
  },
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.col {
  padding: 0;
  border-radius: 0 !important;
}
</style>