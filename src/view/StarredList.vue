<template>
  <div class="starredList">
    <FilterName />
    <ul class="wrapper">
      <li v-for="repo in searchStarred" :key="repo.id">
        <div class="starredList__item" v-if="repo.stargazers_count">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          <p class="starredList__item__description">{{ repo.description }}</p>
          <section class="starredList__item__git-info">
            <span class="starredList__item__git-info__starredCont">
              <i class="bi bi-star-fill" style="font-size: 15px"></i>
              <p>{{ repo.stargazers_count }}</p>
            </span>
            <span class="starredList__item__git-info__fork">
              <img
                src="https://cdn.icon-icons.com/icons2/1875/PNG/512/gitfork_120084.png"
              />
              <p>{{ repo.forks_count }}</p>
            </span>
          </section>
        </div>
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
    this.updateStarredCont();
  },
  computed: {
    userStarred() {
      return this.$store.state.userStarred;
    },
    filterText() {
      return this.$store.state.filterText;
    },
    searchStarred: function () {
      return this.userStarred.filter((repo) => {
        return (
          repo.name.toLowerCase().match(this.filterText) ||
          repo.owner.login.toLowerCase().match(this.filterText)
        );
      });
    },
  },
  watch: {
    searchStarred: function () {
      if (this.searchStarred !== "") {
        this.updateStarredCont(this.searchStarred.length);
      } else {
        this.updateStarredCont(this.userStarred.length);
      }
    },
  },
  methods: {
    updateStarredCont() {
      let payload;
      if (this.searchStarred !== "") {
        payload = this.searchStarred.length;
      } else {
        payload = this.userStarred.length;
      }
      this.$store.commit("mutateStarredCont", payload);
    },
  },
};
</script>

<style lang="scss" src="../scss/starredList/_starredList.scss" />