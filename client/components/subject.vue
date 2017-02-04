<template>
  <li class="subject">
    <router-link v-if="!s.facet" :to="{ path: `/term/${s.term_id}`}">{{s.term}}</router-link>
    <div v-else @click="toggle">{{s.term}}</div>
    <transition name="fade">
      <div v-show="visible" class="extra">
        <p v-if="s.notes" class="notes">{{s.notes}}</p>
        <ul>
          <subject v-for="child in s.children" :depth="depth+1" :s="child"></subject>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'subject',
  props: {
    s: {
      type: Object,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      visible: (!this.s.facet),
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

li.subject {
  font-size: 30px;
}

ul {
  /*list-style-type: none;*/
  /*padding: 0;*/
}

li.subject li {
  font-size: 0.9em;
}

a {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  overflow: hidden;
  opacity:1.0;
  max-height:1000px;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}

</style>
