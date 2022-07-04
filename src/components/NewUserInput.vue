<template>
  <label class="newUser">
    <i class="bi bi-search" style="font-size: 18px"> </i>
    <input
      type="text"
      class="newUser__input"
      placeholder="Insira um nome de usuário"
      @keydown.enter="updateUsername($event)"
    />
  </label>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$store.state.username;
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

<style lang="scss" src="../scss/newUserInput/_newUserInput.scss" />