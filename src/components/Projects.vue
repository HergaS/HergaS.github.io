<template>
  <b-row class="image-container my-5 mx-auto">
    <b-col
      class="mb-3 mx-auto"
      cols="12"
      md="6"
      lg="4"
      v-for='project in projects' :key='project.id'
    >
      <b-link :href="project.link" target="_blank">
        <b-img
          class="images"
          :src="require(`@/assets/${project.image}`)"
          alt=""
          fluid
          rounded=""
        ></b-img>
      </b-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  computed: {
    projects () {
      return this.$store.getters.projects
    }
  }
}
</script>

<style scoped>
    .images{
        max-width: 100%;
    }
    .image-container{
      border: 1px solid blue;
    }
</style>
