<template>
  <div id="app">
    <page/>
  </div>
</template>

<script  lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Page from "./blocks/Page.vue";

  @Component({
    components: {
      Page,
    },
  })
  export default class App extends Vue {
  }
</script>
