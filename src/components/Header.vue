<template>
  <b-row class="hello">
    <h1 id="title" class="mx-auto my-5">{{ msg }}</h1>
  </b-row>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    margin-top: 30%;
    border: 1px solid green;
  }
</style>
