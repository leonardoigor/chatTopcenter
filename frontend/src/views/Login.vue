<template>
  <div id="app">
    <v-app>
      <main class="fill">
        <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-5 blue darken-4">
                <v-toolbar-title class="white--text"
                  ><h4>Welcome Back</h4></v-toolbar-title
                >
                <v-toolbar-items />
              </v-toolbar>
              <v-card>
                {{ err }}
                <v-card-text class="pt-4">
                  <div>
                    <v-form v-model="valid" ref="form">
                      <v-text-field
                        :disabled="loading"
                        label="Enter your e-mail address"
                        v-model="name"
                        :rules="[() => !!name]"
                        required
                      ></v-text-field>
                      <v-layout justify-space-between>
                        <v-btn
                          @click="submit"
                          :class="{
                            'blue darken-4 white--text': valid,
                            disabled: !valid,
                          }"
                          :disabled="loading || !valid"
                          :loading="loading"
                          >Login</v-btn
                        >
                        <a href="">Forgot Password</a>
                      </v-layout>
                    </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  methods: {
    submit() {
      this.loading = true;
      Axios.post("http://192.168.1.106:3000/create", { name: this.name })
        .then((r) => {
          console.log(r);
          this.component.log = true;
          this.component.user = r.data;
        })
        .catch((r) => (this.err = r.message))
        .finally(() => {
          this.loading = false;
          //   alert();
        });
    },
  },
  data: () => ({
    loading: false,
    valid: false,
    name: "",
    err: "",
  }),
  props: {
    component: Object(),
  },
};
</script>

<style>
.loginOverlay {
  background: rgba(33, 150, 243, 0.3);
}

.photoCredit {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.fill {
  height: 100%;
}
</style>