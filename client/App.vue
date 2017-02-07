<template>
  <main id="app">
    <loader :loading="loading"/>
    <header>
      <h1>An archive of sorts,</h1>
      <router-link to='/subjects'>Subjects</router-link>
      <router-link to='/ommatidia'>Ommatidium</router-link>
    </header>
    <router-view></router-view>
    <footer>
      <p>This is the end...</p>
    </footer>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import ommatidium from 'components/ommatidium';
import subject from 'components/subject';
import loader from 'components/loader';

export default {
  name: 'app',
  components: {
    ommatidium,
    subject,
    loader,
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style src="./assets/fonts/fonts.css"></style>
<style>

body, html {
  width: 100%;
  height: 100%;
}

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
