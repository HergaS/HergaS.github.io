<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  background-image: url("~@/assets/laptop-background.jpg");
  background-color: #3d3d3d;
  height: 90vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Quicksand', sans-serif;
  height: 100vh;
}
@media only screen and (max-width: 800px) {
  body {
    height: auto;
    background-repeat: repeat-y;
  }
}
.fade-appear-class{
  opacity: 0;
}
.fade-appear-to-class{
  opacity: 1;
}
.fade-appear-active-class{
  transition: all 1.5s ease-in-out;
  transition-delay: 1.8s;
}
</style>
