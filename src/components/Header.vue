<template>
  <b-row id="hello">
    <h1 id="name" class="mx-auto my-2">{{ msg }}</h1>
    <b-col cols="12" id="title">Web Developer</b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      name: document.getElementById('name')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hello{
    margin-top: 5%;
  }
  #name{
    color: white;
    font-size: 4.5rem;
    font-weight: 500;
  }
  #title{
    color: #62c232;
    font-size: 1.8rem;
    font-weight: 500;
    animation: titleAnimate 0.5s ease-in-out;
    -webkit-animation: titleAnimate 0.5s ease-in-out;
    animation-fill-mode: both;
    animation-delay: 1.5s;
    -webkit-animation-delay: 1.5s;
  }
  @media only screen and (min-width: 800px){
    #name{
      -webkit-animation: nameAnimate 1.5s ease-in-out;
      animation: nameAnimate 1.5s ease-in-out;
    }
  }
  @media only screen and (max-width: 800px){
    #name{
      animation: nameAnimateMobile 1.5s ease-in-out;
      -webkit-animation: nameAnimateMobile 1.5s ease-in-out;
    }
  }
  @keyframes nameAnimate {
    0% {
      font-size: 0;
    }
    50% {
      font-size: 8rem;
    }
    100% {
      font-size: 4.5rem;
    }
  }
  @keyframes nameAnimateMobile {
    0% {
      font-size: 4.5rem;
    }
    50% {
      font-size: 8rem;
    }
    100% {
      font-size: 4.5rem;
    }
  }
  @keyframes titleAnimate {
    0% {
      font-size: 0;
    }
    100% {
      font-size: 1.8rem;
    }
  }
</style>
