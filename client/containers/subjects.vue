<template>
<div>
  <h1>THIS IS SUBJECTS VIEW</h1> 
  <ul>
    <subject v-for="subject in subjects" :s="subject"></subject>
  </ul>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { GET_SUBJECTS } from 'constants/actions';
import subject from 'components/subject';

export default {
  name: 'subjects',
  components: {
    subject,
  },
  created() {
    this[GET_SUBJECTS]();
  },
  computed: {
    ...mapState(['subjects']),
  },
  methods: {
    ...mapActions([GET_SUBJECTS]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
