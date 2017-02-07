<template>
<div>
  <ommatidium v-for="om in oms" :om="om" ></ommatidium>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ommatidium from 'components/ommatidium';
import {
  GET_OMS,
} from 'constants/actions';


export default {
  name: 'ommatidia',
  components: {
    ommatidium,
  },
  created() {
    this[GET_OMS]({ id: this.$route.params.id });
  },
  watch: {
    // call again the method if the route changes
    $route() {
      this[GET_OMS]({ id: this.$route.params.id });
    },
  },
  computed: {
    ...mapState(['oms', 'subjects']),
  },
  methods: {
    ...mapActions([GET_OMS]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
