<template>
  <div class="reposCard">
    <h2>{{ userRepos.name }}</h2>
    <p>{{ userRepos.description }}</p>
    <div class="reposDetails">
      <span class="reposDetails__lang">
        <p>{{ userRepos.language }}</p>
      </span>
      <span class="reposDetails__forks">
        <p>{{ userRepos.forks_count }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userRepos() {
      return this.$store.state.repos;
    },
  },
};
</script>

<style lang="scss" src="../scss/_reposCard.scss"/>