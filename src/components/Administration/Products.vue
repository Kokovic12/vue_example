/* eslint-disable no-return-assign */
<template>
  <div>
    <DataTable :value="cars">
      <Column field="vin" header="Vin"></Column>
      <Column field="year" header="Year"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService'

export default {
  data() {
    return {
      products: null
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.productService.getProductsSmall().then(data => this.products)
  }
}
</script>