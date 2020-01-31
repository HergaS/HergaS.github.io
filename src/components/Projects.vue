<template>
  <b-row class="image-container my-5 mx-auto">
    <b-col
      class="my-3 mx-auto"
      cols="12"
      md="6"
      lg="4"
      v-for='project in projects' :key='project.id'
    >
      <b-link :href="project.link" target="_blank">
        <b-img
          class="images"
          :src="require(`@/assets/projectsImg/${project.image}`)"
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
      position: relative;
    }
    .image-container::after{
      background-color: #3d3d3d;
      content : "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity : 0.4;
      z-index: -1;
    }
</style>
