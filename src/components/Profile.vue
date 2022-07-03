<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" :src="user.avatar_url" />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Repositórios:
              <span class="badge bg-success">{{ user.public_repos }}</span>
            </li>
            <li class="list-group-item">
              Seguidores:
              <span class="badge bg-primary">{{ user.followers }}</span>
            </li>
            <li class="list-group-item">
              Seguindo: <span class="badge bg-info">{{ user.following }}</span>
            </li>
          </ul>
          <div class="card-body">
            <a
              :href="user.html_url"
              class="btn btn-warning btn-block"
              target="_blank"
              >Ver perfil</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>