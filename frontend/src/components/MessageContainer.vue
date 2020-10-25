<template>
  <v-card class="mx-auto card messageContainer">
    <v-toolbar
      height="77.5px"
      style="border-bottom: 2px solid red"
      class="header"
      color="white"
      shaped
      dark
    >
      <div class="profileImg">
        <img :src="component.chatSelected.img" alt="" />
      </div>
      {{ component.chatSelected }}
      <div
        class="action"
        v-show="!component.ShowUserInfo"
        @click="component.changeShowUser()"
      >
        <v-btn dark icon right>
          <v-icon style="color: black" color="black">mdi-chevron-left</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>
    </v-toolbar>

    <div class="containerMessages">
      <div class="ListMessages">
        <v-list three-line height="100%">
          <template v-for="item in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-list-item
              v-else-if="!item.header"
              :key="item.id"
              style="width: 59%; margin-top: 7px"
              :class="item.who === 'me' ? 'me' : ''"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
      <div class="actionsContainer">
        <input
          type="text"
          placeholder="Digite Sua Mensagem"
          v-model="msgInput"
        />
        <v-btn height=" 100%" color="#42A5F5" @click="submitMsg()">
          <v-icon color="white">mdi-near-me</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    component: Object(),
  },
  data: () => ({
    msgInput: String(),
    items: [
      { header: "Today" },
      {
        id: "12a",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Ali Connors",
        subtitle: ` I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        id: "2a",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "to Alex, Scott, Jennifer",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        who: "me",
      },
    ],
    i: 3,
  }),
  methods: {
    createNewMessage({ avatar, title, subtitle, who = null, id }) {
      let data = {};

      data.id = id;
      data.avatar = avatar;
      data.title = title;
      data.subtitle = subtitle;
      data.who = who;
      data.date = new Date();
      console.log(data, "data");
      this.items.push(data);
    },
    submitMsg() {
      let data = {};
      data.title = this.component.App.user.name;
      data.subtitle = this.msgInput;
      data.avatar = "https://cdn.vuetifyjs.com/images/lists/1.jpg";
      data.who = "me";
      data.id = this.i;

      this.createNewMessage({ ...data });
      console.log(data);
      this.i++;
    },
  },
};
</script>

<style >
.me {
  float: right;
  background: #87cefa;
  color: #fff;
  border-radius: 20px 0 0px 20px;
}
.actionsContainer {
  flex: 1;
  border-top: 4px solid #42a5f5;
  background: #fff;
  display: flex;
}
.actionsContainer input {
  flex: 10;
}
.actionsContainer button {
  flex: 1;
}
.ListMessages {
  flex: 10;
}
.action {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.card {
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 0 !important;
  box-shadow: none !important;
}
.containerMessages {
  height: 100%;
  background: gray;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.header {
  border-radius: 0;
  box-shadow: none !important;
  border-bottom: 4px solid;
  background: blue;
  height: 80px;
}
.messageContainer .v-toolbar__content {
  border-bottom: 4px solid #42a5f5;
}
.profileImg > img {
  width: 40px;
  border-radius: 50%;
  height: 40px;
}
</style>