<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <div class="card card-body">
        <h1>Pesquisar usuários do GitHub</h1>
        <p class="lead">Digite um nome para encontrar usuário eo repositório</p>
        <input
          @keyup="getUser"
          type="text"
          name="form-control"
          id="search"
          required
        />
      </div>

      <div class="row mt-3" v-if="user.length !== 0">
        <div class="col-md-4">
          <Profile :user="user" />
        </div>
        <div class="col-md-8">
          <Repo v-for="repo in repos" :key="repo" :repo="repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Profile from "./components/Profile.vue";
import Repo from "./components/Repo.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      github: {
        url: "https://api.github.com/users",
        client_id: "90978c54287ef2f1feff",
        client_secret: "4a962dc8bd628b20313aef36fded8c413e93d1fc",
        count: " ",
        sort: "created: asc",
      },
      user: [],
      repos: [],
    };
  },
  components: {
    NavBar,
    Profile,
    Repo,
  },
  methods: {
    getUser(e) {
      const user = e.target.value;
      const { url, client_id, client_secret, count, sort } = this.github;

      axios
        .get(
          `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => (this.user = data));

      axios
        .get(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => (this.repos = data));
    },
  },
};
</script>