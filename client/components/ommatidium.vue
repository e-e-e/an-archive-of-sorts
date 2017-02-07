<template>
  <article class="ommatidium">
    <header>
      <h1>{{ om.title }}</h1>
      <nav>
        <ul>
          <li v-for="link in om.links"> 
            <router-link :to="{path:`/ommatidia/${link.om_id}`}">{{ link.title }}</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <hr/>

    <section class="gallery">
      <omImage v-for="image in om.files.images" :file="image"/>
    </section>

    <section class="content" v-html="content"></section>

    <!-- <section class="notes">
      
    </section> -->

    <section class='otherfiles'>
      <div v-for="file in om.files.others">
        {{file.original_name}}
      </div>
    </section>

    <hr/>

    <section>
      <h2>Subjects:</h2>
      <div v-for="facet in facets" v-if="om[facet].length" :class="['subject-links',facet]">
        <h3>{{facet}}</h3>
        <ul>
          <li v-for="s in om[facet]">
            <router-link :to="{ path: `/term/${s.id}`}">{{ s.term }}</router-link>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
import marked from 'marked';
import omImage from 'components/omImage';

export default {
  name: 'ommatidium',
  components: {
    omImage,
  },
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
      const { description } = this.om;
      return description && marked(description, { sanitize: true });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

article.ommatidium {
  border: solid 2px black;
  margin: 1em;
  padding: 2em 1em;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

</style>
