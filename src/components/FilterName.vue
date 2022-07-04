<template>
  <label class="nameFilter">
    <i class="bi bi-search" style="font-size: 18px"> </i>
    <input
      type="text"
      class="nameFilter__input"
      placeholder="Filtrar pelo Nome"
      v-model="filterText"
    />
  </label>
</template>

<script>
export default {
  data() {
    return {
      filterText: "",
    };
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
  watch: {
    filterText: function () {
      let payload = this.filterText.toLowerCase();
      this.$store.commit("mutateFilterText", payload);
    },
  },
  methods: {
    updateUsername(event) {
      let newUser = event.target.value;
      this.$store.commit("mutateUsername", newUser);
    },
  },
};
</script>

<style lang="scss" src="../scss/filterName/_filterName.scss" />