<template>
  <div class="card card-body mb-2">
    <div class="row">
      <div class="col-md-6">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      </div>
      <div class="col-md-6">
        <span class="badge bg-primary m-1"
          >Stars: {{ repo.stargazers_count }}</span
        >
        <span class="badge bg-info m-1">Watch: {{ repo.watchers_count }}</span>
        <span class="badge bg-success m-1">Stars: {{ repo.forks_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repo"],
};
</script>