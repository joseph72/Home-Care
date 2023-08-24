<template>
  <div class="hello">
    <div>
      <section v-for="(item, index) in content" :key="index">
      
      <h1>{{item}}</h1>
      </section>

    </div>


  </div>
</template>

<script>
export default {
  name: 'GenericPage',
  data() {
    return { content: ["Chrisann","Jodian",  "Burrell"] }
  },

  async beforeRouteEnter(to) {
    const pageId = to.name;
    console.log(pageId)
  },
  async beforeRouteUpdate(to) {
    const pageId = to.name;
    console.log(pageId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
