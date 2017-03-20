<template>
  <img :src="imageSrc"></img>
</template>

<script>

export default {
  name: 'omImage',
  props: {
    file: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    imageSrc() {
      const { path: dir, name } = this.file;
      return `http://localhost:3000/${dir}/${name}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
