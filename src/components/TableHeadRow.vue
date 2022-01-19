<template>
  <thead class="main">
  <tr>
    <th
        class="headCell, firstColumnCell"
        scope="col"
    >
      {{ id }}
    </th>
    <th
        class="headCell, secondColumnCell, notFirstColumnCell"
        scope="col"
    >
      {{ name }}
    </th>
    <th
        class="headCell, notFirstColumnCell"
        scope="col"
    >
      {{ alias }}
    </th>
    <th
        class="headCell, notFirstColumnCell"
        scope="col"
    >
      {{ sourceSystem }}
    </th>
    <th
        class="headCell, notFirstColumnCell"
        scope="col"
    >
      {{ category }}
    </th>
    <th
        class="headCell, notFirstColumnCell"
        scope="col"
    >
      {{ updatedBy }}
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
  $med-light: #dadada;
  $mobile: 48em;      // 768px
  $tablet: 62em;      // 992px
  .main {
    display: block;
    border-bottom: 1px solid $med-light;
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
          width: 50px;
          text-align: center;
          padding-left: initial;
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
          width: 220px;
          padding-left: initial;
        }
      }
    }
  }
</style>
