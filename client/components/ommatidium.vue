<template>
  <div class="ommatidium">
    <h1>{{ om.title }}</h1>
    <hr/>
    <div v-html="content"></div>
    <hr/>
    <h2>Files:</h2>
      <ul>
      <li v-for="file in om.files"> 
        {{file}}
      </li>
    </ul>
    <h2>Links:</h2>
    <ul>
      <li v-for="link in om.links"> 
        <router-link :to="{path:`/ommatidia/${link.om_id}`}">{{ link.title }}</router-link>
      </li>
    </ul>
    <h2>Subjects:</h2>
    <div v-for="facet in facets" v-if="om[facet].length" :class="['subject-links',facet]">
      <h3>{{facet}}</h3>
      <ul>
        <li v-for="s in om[facet]">
          <router-link :to="{ path: `/term/${s.id}`}">{{ s.term }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'ommatidium',
  props: {
    om: {
      type: Object,
    },
  },
  data() {
    return {
      facets: ['personality', 'matter', 'energy', 'space', 'time'],
    };
  },
  computed: {
    content() {
      return marked(this.om.description, { sanitize: true });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.ommatidium {
  border: solid 2px black;
  margin: 1em;
  padding: 2em 1em;
}

h1, h2 {
  font-weight: normal;
}

/*ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
*/
a {
  color: #42b983;
}

</style>
