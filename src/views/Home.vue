<template>
  <b-container fluid="" class="home">
    <Icons />
    <Header msg="Sašo Herga"/>
    <Description />
    <Projects align-v="end" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Description from '@/components/Description.vue'
import Projects from '@/components/Projects.vue'
import Icons from '@/components/Icons.vue'

export default {
  name: 'home',
  components: {
    Header,
    Description,
    Projects,
    Icons
  }
}
</script>

<style scoped>
  .home{
    height: 100vh;
  }
</style>
