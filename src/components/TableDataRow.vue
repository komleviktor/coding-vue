<template>
  <tr class="table borderedInBottom">
    <td
        class="afterHeaderCell firstColumnCell"
    >
      {{ id }}
    </td>
    <td
        class="afterHeaderCell notFirstColumnCell secondColumnCell"
    >
      <input
          :value="name"
          @change="update($event, 'name')"
      />
    </td>
    <td
        class="afterHeaderCell notFirstColumnCell"
    >
      <input
          :value="alias"
          @change="update($event, 'alias')"
      />
    </td>
    <td
        class="afterHeaderCell notFirstColumnCell"
    >
      <input
          :value="sourceSystem"
          @change="update($event, 'sourceSystem')"
      />
    </td>
    <td
        class="afterHeaderCell notFirstColumnCell"
    >
      <input
          :value="category"
          @change="update($event, 'category')"
      />
    </td>
    <td
        class="afterHeaderCell notFirstColumnCell"
    >
      <input
        :value="updatedBy"
        @change="update($event, 'updatedBy')"
      />
    </td>
  </tr>
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import Vue from 'vue'
  import { namespace } from 'vuex-class'
  const table = namespace('Table')

  @Component
  export default class TableDataRow extends Vue {
    //props
    @Prop({ required: false, type: Number, default: 'id' }) readonly id: number
    @Prop({ required: false, type: String, default: 'Name' }) readonly name: string
    @Prop({ required: false, type: String, default: 'Alias' }) readonly alias: string
    @Prop({ required: false, type: String, default: 'Source System' }) readonly sourceSystem: string
    @Prop({ required: false, type: String, default: 'Category' }) readonly category: string
    @Prop({ required: false, type: String, default: 'Updated by' }) readonly updatedBy: string


    //mapAction
    @table.Action
    public setNewData!: ({ id, dataName, dataValue }) => void

    //methods
    public update(event, dataName): void {
      this.setNewData({ id: this.id, dataName, dataValue: event.target.value })
    }
  }
</script>

<style lang="scss" scoped>
$med-light: #dadada;
$table-blue: #034580;
$mobile           : 48em;      // 768px
$tablet           : 62em;      // 992px

.borderedInBottom {
  border-bottom: 1px solid $med-light;
}

.table {
  td {
    cursor: default;
    word-break: break-word;
  }

  @media (min-width: $mobile) {
    .afterHeaderCell {
      padding-top: 22px;
      padding-bottom: 22px;
    }
  }

  .firstColumnCell {
    @media (min-width: $mobile) {
      width: 18%;
      padding-left: 30px;
    }

    @media (min-width: $tablet) {
      width: 50px;
      padding-left: 30px;
    }
  }

  .notFirstColumnCell {
    @media (min-width: $mobile) {
      padding-left: 80px;
    }

    @media (min-width: $tablet) {
      padding-left: 120px;
    }
  }

  .secondColumnCell {
    text-align: right;
  }
}
</style>
