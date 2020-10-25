<template>
  <div class="home">
    <v-row>
      <v-col cols="2"> <UsersList :component="this" /> </v-col>
      <v-col> <MessageContainer :component="this" /> </v-col>
      <v-col cols="4" v-if="ShowUserInfo">
        <UserInfo :component="this" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    UsersList: () => import("./../components/UsersList"),
    MessageContainer: () => import("./../components/MessageContainer"),
    UserInfo: () => import("./../components/UserInfo"),
  },

  data: () => ({
    ShowUserInfo: Boolean(true),
    chatSelected: Object({
      img: "https://cdn.vuetifyjs.com/images/lists/ali.png",
    }),
    recent: [
      {
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Jason Oner",
      },
      {
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Mike Carlson",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Cindy Baker",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Ali Connors",
      },
    ],
    previous: [
      {
        title: "Travis Howard",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      },
    ],
  }),
  methods: {
    changeShowUser() {
      this.ShowUserInfo = !this.ShowUserInfo;
    },
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
  margin: 0;
}
</style>