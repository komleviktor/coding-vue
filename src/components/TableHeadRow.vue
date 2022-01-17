<template>
  <thead class="main">
  <tr>
    <th
        class="headCell firstColumnCell"
        scope="col"
    >
      {{ id }}
    </th>
    <th
        class="headCell secondColumnCell notFirstColumnCell"
        scope="col"
    >
      {{ name }}
    </th>
    <th
        class="headCell notFirstColumnCell"
        scope="col"
    >
      {{ alias }}
    </th>
    <th
        class="headCell notFirstColumnCell"
        scope="col"
    >
    </th>
    <th
        class="headCell notFirstColumnCell"
        scope="col"
    >
      {{ sourceSystem }}
    </th>
    <th
        class="headCell notFirstColumnCell"
        scope="col"
    >
    </th>
    <th
        class="headCell notFirstColumnCell"
        scope="col"
    >
      {{ category }}
    </th>
    <th
        class="headCell notFirstColumnCell"
        scope="col"
    >
    </th>
    <th
        class="headCell, notFirstColumnCell"
        scope="col"
    >
      {{ updatedBy }}
    </th>
    <th
        class="headCell, notFirstColumnCell"
        scope="col"
    >
    </th>
  </tr>
  </thead>
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import Vue from 'vue'

  @Component
  export default class TableHeadRow extends Vue {
    @Prop({ required: false, type: String, default: 'id' }) readonly id: string
    @Prop({ required: false, type: String, default: 'Name' }) readonly name: string
    @Prop({ required: false, type: String, default: 'Alias' }) readonly alias: string
    @Prop({ required: false, type: String, default: 'Source System' }) readonly sourceSystem: string
    @Prop({ required: false, type: String, default: 'Category' }) readonly category: string
    @Prop({ required: false, type: String, default: 'Updated by' }) readonly updatedBy: string
  }
</script>


<style lang="scss" scoped>
$mobile           : 48em;      // 768px
$tablet           : 62em;      // 992px
.main {

  td {
    cursor: default;
    word-break: break-word;
  }

  @media (min-width: $mobile) {
    .headCell {
      padding: 15px 0;
      font-weight: bold;
    }

    .firstColumnCell {
      @media (min-width: $mobile) {
        width: 18%;
        padding-left: 30px;
      }

      @media (min-width: $tablet) {
        width: 130px;
        padding-left: 30px;
      }
    }

    .secondColumnCell {
      @media (min-width: $mobile) {
        width: 23%;
      }

      @media (min-width: $tablet) {
        width: 204px;
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
  }
}
</style>
