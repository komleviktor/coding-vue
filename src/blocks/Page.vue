<template>
  <div>
    <tables
        categoryName="Production Category"
        :items="getProduction"
    />
    <tables
        categoryName="Consumption Category"
        :items="getConsumption"
    />
    <tables
        categoryName="Volume Category"
        :items="getVolume"
    />
    <tables
        categoryName="Exchange Category"
        :items="getExchange"
    />

    <tables
        categoryName="Price Category"
        :items="getPrice"
    />
    <tables
        categoryName="Other Category"
        :items="getOtherCategories"
    />
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Tables from "../blocks/Tables.vue";
  import { namespace } from 'vuex-class'
  const table = namespace('Table')

  @Component({
    components: {
      Tables,
    },
  })
export default class Page extends Vue {
    async mounted() {
      await  this.loadMockDataToLocalStorage()
      await this.getMockData();
    }
    //computed
    //mapGetters
    @table.Getter
    public getProduction!: Array<object>
    @table.Getter
    public getConsumption!: Array<object>
    @table.Getter
    public getExchange!: Array<object>
    @table.Getter
    public getVolume!: Array<object>
    @table.Getter
    public getPrice!: Array<object>
    @table.Getter
    public getOtherCategories!: Array<object>

    //methods
    //mapAction
    @table.Action
    public getMockData!: () => void

    @table.Action
    public loadMockDataToLocalStorage!: () => void

  }
</script>

<style lang="scss" scoped>
</style>
