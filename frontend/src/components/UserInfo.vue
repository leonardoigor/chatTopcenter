<template>
  <v-card class="mx-auto full">
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title style="align-content: baseline">
          <v-btn
            dark
            icon
            v-show="component.ShowUserInfo"
            @click="component.changeShowUser()"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">Ali Conners</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <div v-for="info in userInformations" :key="info.id" style="width: 100%">
        <v-list-item>
          <v-list-item-action v-if="!info.isEmail"></v-list-item-action>
          <v-list-item-icon v-if="info.isEmail">
            <v-icon color="indigo"> mdi-map-marker </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ info.value }}</v-list-item-title>
            <v-list-item-subtitle>{{ info.text }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider inset v-if="info.divider"></v-divider>
      </div>
    </v-list>
  </v-card>
</template>
<script>
export default {
  props: { component: Object() },
  data: () => ({
    name: "unUser",
    profission: "FullStack",
    size: Number(),
    userInformations: [
      {
        id: 1,
        text: "Work",
        value: "(650) 555-1234",
      },
      {
        id: 2,
        text: "Mobile",
        value: "(650) 555-1234",
        divider: true,
      },
      {
        isEmail: true,
        id: 3,
        text: "Work",
        value: "ali_connors@example.com",
      },
      {
        isEmail: true,
        id: 4,
        text: "Personal",
        value: "aliconnors@example.com",
      },
    ],
  }),
  mounted() {
    this.size = "max-height:" + (window.innerHeight - 400) + "px";
  },
};
</script>

<style>
.full {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.lastSee {
  font-size: 12px;
  color: #ccc;
}
.card {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.containerUser {
  background: #fff;
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.userInfo {
  width: 100%;
}
.userInfo .userListActivity {
  overflow: auto;
}
.infoUser {
  display: flex;
  flex-direction: column;
}
</style>