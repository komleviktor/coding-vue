<template>
  <div v-if="isListExist">
    <h1>{{categoryName}}</h1>
    <table-head-row/>
    <div v-for="item in items">
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
import Component from 'vue-class-component'
import TableHeadRow from "../components/TableHeadRow.vue";
import TableDataRow from "../components/TableDataRow.vue";
import { Prop } from "vue-property-decorator";

@Component({
  components: {
    TableDataRow,
    TableHeadRow,
  },
})
  export default class Table extends Vue {

  //props
  @Prop({ required: false, type: Array, default: () => [] }) readonly items: Array<object>
  @Prop({ required: false, type: String, default: '' }) readonly categoryName: String

  //computed
  isListExist (): any {
    return this.items?.length;
  }

}
</script>

<style lang="scss" scoped>
</style>
