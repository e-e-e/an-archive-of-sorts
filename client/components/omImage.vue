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
      const { original_path: dir, original_name: name } = this.file;
      return `${dir}/${name}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
