<template>
    <b-row class="icon-container" align-h="end">
      <b-col cols="1">
          <b-link href="https://www.linkedin.com/in/sa%C5%A1o-herga-b0a106196/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="icons" />
          </b-link>
      </b-col>
      <b-col cols="1">
          <b-link href="https://github.com/HergaS" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" size="2x" class="icons" />
          </b-link>
      </b-col>
    </b-row>
</template>

<script>
export default {
}
</script>

<style>
.icon-container{
  height: 10vh;
  margin-top: 1vh;
}
.icons{
  transition: 0.5s ease-in-out;
  color: #62c232
}
.icons:hover{
  font-size: 2.5em;
  color: #8fd96a;
}
</style>
