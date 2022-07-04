<template>
  <div class="logoBar">
    <router-link :to="{ name: 'Home' }" class="logoBar__link">
      <i class="bi bi-github" style="font-size: 25px"></i>
      <h1 class="logobar__txt">
        <span class="logobar__txt__strong">Github</span> profiles
      </h1>
    </router-link>
    <button
      v-if="username !== ''"
      @click="updateUsername('')"
      class="logoBar__btn"
    >
      Change Username
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    usermame() {
      return this.$store.state.username;
    },
  },
  methods: {
    updateUsername(payload) {
      this.$store.commit("mutateUsername", payload);
    },
  },
};
</script>

<style lang="scss" src="../scss/_LogoBar.scss" />