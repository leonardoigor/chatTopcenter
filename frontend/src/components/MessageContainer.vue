<template>
  <v-card class="mx-auto card">
    <v-toolbar height="74px" class="header" color="white" dark>
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

    <v-container class="containerMessages"> </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    component: Object(),
  },
};
</script>

<style>
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
}
.header {
  border-radius: 0;
  box-shadow: none !important;
  border-bottom: 4px solid red;
  background: blue;
}
.profileImg > img {
  width: 40px;
  border-radius: 50%;
  height: 40px;
}
</style>