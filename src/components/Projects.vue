<template>
  <transition
      appear
      appear-class="fade-appear-class"
      appear-to-class="fade-appear-to-class"
      appear-active-class="fade-appear-active-class"
    >
      <b-row class="proj-position">
        <b-col
          class="image-container mx-auto"
          cols="12"
          md="10"
          xl="8"
        >
          <b-row>
            <b-col cols="12" id="proj" @click="scrollTo">Projects</b-col>
            <b-col
              class="my-3 mx-auto"
              cols="12"
              md="4"
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
        </b-col>
      </b-row>
    </transition>
</template>

<script>
export default {
  computed: {
    projects () {
      return this.$store.getters.projects
    }
  },
  methods: {
    scrollTo () {
      const el = this.$el.getElementsByClassName('images')[0]
      if (el) {
        el.scrollIntoView()
      }
    }
  },
  created () {
    console.log('Deployed')
  }
}
</script>

<style scoped>
    #proj{
      color: white;
      font-size: 1.8rem;
      font-weight: 500;
    }
    .proj-position{
      margin-top: 20vh;
    }
    .images{
      max-width: 100%;
    }
    .images:hover{
      transition: 0.5s;
      box-shadow: 5px 4px 20px 2px rgba(0, 0, 0, 0.2), 0 6px 8px 3px rgba(98, 194, 50, 0.9);
    }
    .image-container{
      position: relative;
    }
    .image-container::after{
      background-color: #6b6e70;
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
