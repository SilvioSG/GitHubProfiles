<template>
  <div id="container">
    <LogoBar />
    <Profile v-if="username !== ''" />
    <UnderlineNav v-if="username !== ''" />
    <transition
      enter-active-class="animate__animated  animate__fadeIn"
      leave-active-class="animate__animated  animate__fadeOut"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import LogoBar from "./components/LogoBar.vue";
import UnderlineNav from "./components/UnderlineNav.vue";
import Profile from "./components/Profile.vue";

import axios from "axios";

export default {
  components: { LogoBar, UnderlineNav, Profile },
  data() {
    return {};
  },
  watch: {
    username: function () {
      this.newRequest();
      if (this.username == "") {
        this.$router.push({ name: "Home" });
      } else {
        this.$router.push({ name: "ReposList" });
      }
    },
  },
  computed: {
    requestError() {
      return this.$store.state.requestError;
    },
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    newRequest() {
      if (this.username !== "") {
        axios
          .get(`https://api.github.com/users/${this.username}`)
          .then((response) => {
            const userInfo_data = response.data;
            this.updateUserInfo(userInfo_data);
            this.updateRequestError(false);
          })
          .catch((error) => {
            if (error.status !== 200 || error.status != 304) {
              this.updateUsername("");
              this.updateRequestError(true);
            }
          });
        // Gets user's repositories
        axios
          .get(`https://api.github.com/users/${this.username}/repos`)
          .then((response) => {
            const userRepos_data = response.data;
            this.updateUserRepos(userRepos_data);
            this.updateRequestError(false);
          })
          .catch((error) => {
            this.updateUsername("");
            this.updateRequestError(true);
          });
        // Gets user's starred repositories
        axios
          .get(`https://api.github.com/users/${this.username}/starred`)
          .then((response) => {
            const userStarred_data = response.data;
            this.updateUserStarred(userStarred_data);
            this.updateRequestError(false);
          })
          .catch((error) => {
            this.updateUsername("");
            this.updateRequestError(true);
          });
      }
    },
    updateRequestError(payload) {
      this.$store.commit("mutateRequestError", payload);
    },
    updateUsername(payload) {
      this.$store.commit("mutateUsername", payload);
    },
    updateUserInfo(payload) {
      this.$store.commit("mutateUserInfo", payload);
    },
    updateUserRepos(payload) {
      this.$store.commit("mutateUserRepos", payload);
    },
    updateUserStarred(payload) {
      this.$store.commit("mutateUserStarred", payload);
    },
  },
};
</script>

<style lang="scss" src="./assets/scss/app/_app.scss" />
