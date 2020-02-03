<template>
    <transition
      appear
      appear-class="fade-appear-class"
      appear-to-class="fade-appear-to-class"
      appear-active-class="fade-appear-active-class"
    >
      <b-row class="icon-container" align-h="end">
        <b-col cols="4" xl="1">
            <b-row>
                <b-col cols="5" lg="6" class="icon-col">
                    <b-link href="https://www.linkedin.com/in/sa%C5%A1o-herga-b0a106196/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" class="icons" />
                    </b-link>
                </b-col>
                <b-col cols="5" lg="6" class="icon-col">
                    <b-link href="https://github.com/HergaS" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" size="3x" class="icons" />
                    </b-link>
                </b-col>
            </b-row>
        </b-col>
      </b-row>
    </transition>
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
  color: #62c232;
}
.icons:hover{
  font-size: 3.5em;
  color: #8fd96a;
}
</style>
