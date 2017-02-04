<template>
  <div id="app">
    <h1>An archive of sorts,</h1>
    <div v-show="loading" >LOADING</div>
    <router-link to='/subjects'>Subjects</router-link>
    <router-link to='/ommatidia'>Ommatidium</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ommatidium from 'components/ommatidium';
import subject from 'components/subject';

export default {
  name: 'app',
  components: {
    ommatidium,
    subject,
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style src="./assets/fonts/fonts.css"></style>
<style>
#app {
  font-family: 'default-font-display', Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  color: black;
  margin-top: 60px;
  font-size: 1em;

  & em {
    font-weight: 900;
  }

  & h1 {
    /*-webkit-text-stroke:2px black;*/
    text-align: center;
    /*color: rgba(0,0,0,0);*/
    font-weight: 900;
    font-style: italic;
    font-size: 3em;
  }
}


</style>
