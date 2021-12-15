<template>
  <div class="p-10">
    <div>
      <input
        type="text"
        class="border-2 mb-5 rounded h-10 p-2"
        placeholder="Search records"
        @input="onSearch"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="border-2 p-2 text-left"
            @click="sortRecords(index)"
          >
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
        >
          <td
            v-for="(rowItem, itemIndex) in row"
            :key="itemIndex"
            class="border-2 p-2"
          >
            {{rowItem}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const performSearch = (rows, term) => {
  const results = rows.filter(
    row => row.join(' ').toLowerCase().includes(term.toLowerCase())
  )
  return results
}
export default {
  name: 'Table',
  data () {
    return {
      term: '',
      rawRows: [
        [
          'Manoj', '24', 'Software Developer', '1997'
        ],
        [
          'John', '26', 'Lawyer', '1995'
        ],
        [
          'Lily', '34', 'Saleswoman', '1987'
        ],
        [
          'Rachel', '34', 'aleswoman', '1987'
        ],
        [
          'Ross', '34', 'Barber', '1987'
        ],
        [
          'Chandler', '30', 'Salesman', '1991'
        ]
      ],
      rows: [],
      columns: [
        'Name',
        'Age',
        'Profession',
        'Year of birth'
      ],
      sortIndex: null,
      sortDirection: null
    }
  },
  mounted () {
    this.rows = [...this.rawRows]
  },
  methods: {
    sortRecords (index) {
      if (this.sortIndex === index) {
        switch (this.sortDirection) {
          case null:
            this.sortDirection = 'asc'
            break
          case 'asc':
            this.sortDirection = 'desc'
            break
          case 'desc':
            this.sortDirection = null
            break
          default:
        }
      } else {
        this.sortDirection = 'asc'
      }
      this.sortIndex = index
      if (!this.sortDirection) {
        this.rows = performSearch(this.rawRows, this.term)
        return
      }
      this.rows = this.rows.sort(
        (rowA, rowB) => {
          if (this.sortDirection === 'desc') {
            return rowB[index].localeCompare(rowA[index])
          }
          return rowA[index].localeCompare(rowB[index])
        }
      )
    },
    onSearch (e) {
      this.term = e.target.value
      this.rows = performSearch(this.rawRows, this.term)
    }
  }
}
</script>







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


