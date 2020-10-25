<template>
  <div class="listUser">
    <v-card class="mx-auto card" max-width="500">
      <v-toolbar height="70px" class="header" color="blue lighten-1" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>New Chat</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list subheader>
        <v-subheader>Recent chat</v-subheader>

        <v-list-item v-for="chat in component.recent" :key="chat.title">
          <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="chat.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
              mdi-message-outline
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader style="flex: 1">
        <v-subheader>Previous chats</v-subheader>

        <v-list-item v-for="chat in component.previous" :key="chat.title">
          <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="chat.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    component: Object(),
  },
};
</script>

<style>
.h-100 {
  height: 100vh !important;
}
.v-list {
  background: #fff !important;
}
.card {
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 0 !important;
  box-shadow: none !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #000 !important;
}
.theme--light {
  color: #000 !important;
}
div[role="list"] {
  flex: 10;
}
.v-sheet {
  flex: 1;
}
.header {
  border-radius: 0;
  box-shadow: none !important;
}
</style>