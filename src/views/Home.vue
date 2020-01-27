<template>
  <b-container fluid="sm" class="home">
    <Header msg="Sašo Herga"/>
    <Description />
    <Projects />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Description from '@/components/Description.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'home',
  components: {
    Header,
    Description,
    Projects
  }
}
</script>

<style scoped>
  .home{
    vertical-align: middle;
  }
</style>
