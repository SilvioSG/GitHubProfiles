<template>
  <div id="home">
    <div class="new-username wrapper">
      <NewUserInput v-if="username == ''" />
      <span v-if="requestError" class="new-username__error-txt">
        Check the <em>username</em> and try again
      </span>
    </div>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import NewUserInput from "../components/NewUserInput.vue";
import UnderlineNav from "../components/UnderlineNav.vue";

export default {
  name: "home",
  components: { Profile, NewUserInput, UnderlineNav },
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    requestError() {
      return this.$store.state.requestError;
    },
  },
  watch: {
    requestError: function () {
      if (requestError === true) {
        setTimeout(function () {
          this.$store.commit("mutateRequestError", false);
        }, 3000);
      }
    },
  },
};
</script>
<style lang="scss" src='../scss/_home.scss' />