<template>
  <div class="home">
    <v-row>
      <v-col cols="2"> <UsersList :component="this" /> </v-col>
      <v-col> <MessageContainer :component="this" /> </v-col>
      <v-col cols="3" v-if="ShowUserInfo">
        <UserInfo :component="this" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Io from "socket.io-client";

export default {
  name: "Home",
  components: {
    UsersList: () => import("./../components/UsersList"),
    MessageContainer: () => import("./../components/MessageContainer"),
    UserInfo: () => import("./../components/UserInfo"),
  },
  props: {
    App: Object(),
  },
  data: () => ({
    ShowUserInfo: Boolean(true),

    chatSelected: Object({
      img: "https://cdn.vuetifyjs.com/images/lists/ali.png",
    }),
    recent: [],
    previous: [
      {
        title: "Travis Howard",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      },
    ],
    idSocket: String(),
  }),
  methods: {
    changeShowUser() {
      this.ShowUserInfo = !this.ShowUserInfo;
    },
  },
  mounted() {
    this.App.socket = Io(":3333");

    this.App.socket.on("setup", (data) => {
      console.log(data, "datad");
      let d = data.users.map((r) => {
        if (this.idSocket !== r.user.id) {
          return {
            title: r.user.name,
            avatar: r.user.avatar,
            active: r.user.online,
          };
        }
      });
      this.recent = d;

      console.log(d, "setup");
    });

    this.App.socket.emit("newUser", { user: this.App.user });
    this.App.socket.on("MyUser", (data) => {
      console.log("MyUser", data);
      this.idSocket = data.user.id;
    });
    this.App.socket.on("newUser", (data) => {
      console.log("newUser", data);
      let d = {
        title: data.user.name,
        avatar: data.user.avatar,
        active: data.user.online,
      };
      console.log(d, "d");
      if (this.idSocket !== data.user.id) {
        this.recent.push(d);
      }
    });
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