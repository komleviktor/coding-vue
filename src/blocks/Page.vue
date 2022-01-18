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
  import { Action, Getter } from 'vuex-class';
  const namespace: string = 'table';

  @Component({
    components: {
      Tables,
    },
  })
export default class Page extends Vue {
     async mounted() {
       await this.loadMockDataToLocalStorage()
       await this.getMockData();
    }
    //computed
    //mapGetters
    @Getter('getProduction', { namespace })
    getProduction: Array<object>;

    @Getter('getConsumption', { namespace })
    getConsumption: Array<object>;

    @Getter('getExchange', { namespace })
    getExchange: Array<object>;

    @Getter('getVolume', { namespace })
    getVolume: Array<object>;

    @Getter('getPrice', { namespace })
    getPrice: Array<object>;

    @Getter('getOtherCategories', { namespace })
    getOtherCategories: Array<object>;

    //methods
    //mapAction
    @Action('getMockData', { namespace })
    getMockData: any;

    @Action('loadMockDataToLocalStorage', { namespace })
    loadMockDataToLocalStorage: any;

  }
</script>

<style lang="scss" scoped>
</style>
