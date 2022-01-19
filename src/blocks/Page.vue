<template>
  <div>
    <tables
        categoryName="Production Category"
        :items="getData(CATEGORIES.PRODUCTION)"
        @update="update"
    />
    <tables
        categoryName="Consumption Category"
        :items="getData(CATEGORIES.CONSUMPTION)"
        @update="update"

    />
    <tables
        categoryName="Volume Category"
        :items="getData(CATEGORIES.VOLUME)"
        @update="update"

    />
    <tables
        categoryName="Exchange Category"
        :items="getData(CATEGORIES.EXCHANGE)"
        @update="update"

    />

    <tables
        categoryName="Price Category"
        :items="getData(CATEGORIES.PRICE)"
        @update="update"

    />
    <tables
        categoryName="Other Category"
        :items="getData('other')"
        @update="update"

    />
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Tables from "../blocks/Tables.vue";
  import { services } from "../services/servise";
  import mockData from "../store/mockData.json";
  import { CATEGORIES } from '../constants/common'

  @Component({
    components: {
      Tables,
    },
  })
  export default class Page extends Vue {
    private CATEGORIES = CATEGORIES;
    private data = new services(mockData);

    //computed
    getData(category: string): Array<any> {
      return this.data.read(category);
    }


    //methods
    async update(id: number, category: string, value: string): Promise<any> {
      await this.data.write(id, category,value);
    }
  }
</script>

<style lang="scss" scoped>
</style>
