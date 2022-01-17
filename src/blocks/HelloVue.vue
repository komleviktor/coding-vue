<template>
  <div>
    <table-head-row/>
    <div v-for="item in getProduction">
      <table-data-row
        :alias="item.alias"
        :id="item.id"
        :category="item.category"
        :name="item.name"
        :source-system="item.sourceSystem"
        :updated-by="item.updatedBy"
        />
    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'
  import { mapActions, mapGetters } from 'vuex';
  import Component from 'vue-class-component'
  import TableHeadRow from "../components/TableHeadRow.vue";
  import TableDataRow from "../components/TableDataRow.vue";

  @Component({
    components: {
      TableDataRow,
      TableHeadRow,
    },
    computed: {
      ...mapGetters('Table', [
        'getProduction',
        'getConsumption',
        'getExchange',
        'getVolume',
        'getPrice',
        'getOtherCategories',
      ])
    },
    mounted() {
      this.getMockData();
    },

    methods: {
      ...mapActions('Table', ['getMockData'])
    }
  })
export default class App extends Vue {
  message="hello World!"
}
</script>

<style lang="scss" scoped>

  .root {
    background-color: red;
  }
</style>
