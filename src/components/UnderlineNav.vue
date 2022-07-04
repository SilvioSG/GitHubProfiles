<template>
  <nav id="underlineNav">
    <router-link
      class="underlineNav__link"
      :to="{ name: 'ReposList' }"
      exact-active-class="active_underline"
    >
      <h2>Repositories</h2>
      <span class="counter">{{ reposCont }}</span>
    </router-link>
    <router-link
      class="underlineNav__link"
      :to="{ name: 'StarredList' }"
      exact-active-class="active_underline"
    >
      <h2>Starred</h2>
      <span class="counter">{{ starredCont }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userRepos() {
      return this.$store.state.userRepos;
    },
    userStarred() {
      return this.$store.state.userStarred;
    },
    reposCont() {
      return this.$store.state.reposCont;
    },
    starredCont() {
      return this.$store.state.starredCont;
    },
  },
};
</script>

<style lang="scss" src="../scss/underlineNav/_underlineNav.scss" />