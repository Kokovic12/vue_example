<template>
    <div>
        <h1>Список товаров</h1>

        <select v-model="selectCategory">
            <option value="0">Все категории</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
        </select>

        <select v-model="selectBrand">
            <option value="0">Все бренды</option>
            <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.title }}</option>
        </select>

        <label>Фильтр по цене</label>
        <input v-model.number="minPrice" type="number" />
        <input v-model.number="maxPrice" type="number" />

        <input v-model.trim="inputSearch" type="text" placeholder="Поиск по названию товара" />

        <select v-model="selectSort">
            <option v-for="rule in sortRules" :key="rule.key" :value="rule.key">{{ rule.title }}</option>
        </select>

        <button class="primary small" @click="clear">Сбросить фильтры</button>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Название</th>
                    <th>Бренд</th>
                    <th>Цена</th>
                    <th>Рейтинг</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    is="vue:ProductsItem"
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :product="product"
                ></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import ProductsItem from './ProductsItems.vue'

export default {
  components: {
    ProductsItem
  },
  data () {
    return {
      products: [],
      categories: [],
      brands: [],
      sortRules: [
        { key :'id:asc', title: 'По порядку' },
        { key :'rating:desc', title: 'По рейтингу' },
        { key :'price:asc', title: 'По цене, сначала дешевые' },
        { key :'price:desc', title: 'По цене, сначала дорогие' }
      ],
      inputSearch: '',
      selectCategory: 0,
      selectBrand: 0,
      minPrice: 0,
      maxPrice: 0,
      selectSort: 'id:asc'
    }
  },
  computed: {
    filteredProducts () {
      // Фильтруем товары
      const filtered = this.products
      // По категории
        .filter(product => this.selectCategory === 0 || product.categoryId === this.selectCategory)

      // По брендам
        .filter(product => this.selectBrand === 0 || product.brandId === this.selectBrand)

      // По ценам
        .filter(product => Number(product.price) >= this.minPrice && Number(product.price) <= this.maxPrice)

      // По полю поиска
        .filter(product => this.inputSearch === '' || product.title.toLowerCase().indexOf(this.inputSearch.toLowerCase()) !== -1)

      // Сортируем
      let sorted = this.sortBy(filtered, product => Number(product[this.sortKey]))

      // При необходимости сортируем в обратном направлении
      if (this.sortDir === 'desc') {
        sorted = sorted.reverse()
      }

      return sorted
    },
    sortKey () {
      return this.selectSort.split(':')[0]
    },
    sortDir () {
      return this.selectSort.split(':')[1]
    }
  },
  mounted () {
    // Получение товаров
    axios
      .get('/admin/api/v1/products')
      .then(response => {
        this.products = response.data.records
        this.minPrice = this.getMinPrice()
        this.maxPrice = this.getMaxPrice()
      })

    // Получение категорий
    axios
      .get('/admin/api/v1/categories')
      .then(response => {
        this.categories = response.data.records
      })

    // Получение брендов
    axios
      .get('/admin/api/v1/brands')
      .then(response => {
        this.brands = response.data.records
      })
  },
  methods: {
    getMinPrice () {
      return Number(this.minBy(this.products, 'price').price)
    },
    getMaxPrice () {
      return Number(this.maxBy(this.products, 'price').price)
    },
    clear () {
      this.inputSearch = ''
      this.selectCategory = 0
      this.selectBrand = 0
      this.minPrice = this.getMinPrice()
      this.maxPrice = this.getMaxPrice()
      this.selectSort = 'id:asc'
    }
  }
}
</script>

<style lang="scss" scoped>
    table {
        max-height: 1000px;
    }
</style>


