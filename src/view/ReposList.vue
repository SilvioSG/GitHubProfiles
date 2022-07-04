<template>
  <div class="reposList">
    <FilterName />
    <ul class="wrapper">
      <li v-for="repo in searchRepos" :key="repo.id" class="reposList__item">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        <p class="reposList__item__description">{{ repo.description }}</p>

        <section class="reposList__item__git-info">
          <span class="reposList__item__git-info__lang">
            <i class="bi bi-code" style="font-size: 18px"></i>
            <p>{{ repo.language }}</p>
          </span>

          <span class="reposList__item__git-info__fork">
            <img
              src="https://cdn.icon-icons.com/icons2/1875/PNG/512/gitfork_120084.png"
            />
            <p>{{ repo.forks_count }}</p>
          </span>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import FilterName from "../components/FilterName.vue";
export default {
  components: { FilterName },
  data() {
    return {};
  },
  created() {
    this.updateReposCont();
  },
  computed: {
    userRepos() {
      return this.$store.state.userRepos;
    },
    filterText() {
      return this.$store.state.filterText;
    },
    searchRepos: function () {
      return this.userRepos.filter((repo) => {
        return (
          repo.name.toLowerCase().match(this.filterText) ||
          repo.owner.login.toLowerCase().match(this.filterText)
        );
      });
    },
  },
  watch: {
    searchRepos: function () {
      this.updateReposCont();
    },
  },
  methods: {
    updateReposCont() {
      let payload;
      if (this.searchRepos !== "") {
        payload = this.searchRepos.length;
      } else {
        payload = this.userRepos.length;
      }
      this.$store.commit("mutateReposCont", payload);
    },
  },
};
</script>
<style lang="scss" src="../scss/repos_list/_reposList.scss" />
