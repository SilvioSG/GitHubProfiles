<template>
  <div id="profile">
    <img :src="userInfo.avatar_url" class="profile__img" />
    <span class="profile__info">
      <h2 class="profile__info__name">{{ userInfo.name }}</h2>
      <h3 class="profile__info__bio">{{ userInfo.bio }}</h3>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style lang="scss" src="../scss/profile/_profile.scss" />