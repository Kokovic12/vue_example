<template>
  <div>
    <div id="demo" class="container">
  <input v-model="search" class="form-control" placeholder="Filter users by name or age">

  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id">
          <a v-class="active in sortKey == column" href="#" @click="sortBy(column)">
            {{ column | capitalize }}
          </a>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-repeat="users | filterBy search | orderBy sortKey reverse">
        <td>{{ name }}</td>
        <td>{{ age }}</td>
      </tr>
    </tbody>
  </table>
  <div class="form-group">
    <label>Name</label>
    <input v-model="newUser.name" type="text" class="form-control" >
  </div>

  <div class="form-group">
    <label>Age</label>
    <input v-model="newUser.age" type="name" class="form-control" >
  </div>
  <button type="submit" class="btn btn-primary" @click="addUser()">Add</button>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortKey: 'name',

      reverse: false,

      search: '',

      columns: ['name', 'age'],

      newUser: {},

      users: [
        { name: 'John', age: 50 },
        { name: 'Jane', age: 22 },
        { name: 'Paul', age: 34 },
        { name: 'Kate', age: 15 },
        { name: 'Amanda', age: 65 },
        { name: 'Steve', age: 38 },
        { name: 'Keith', age: 21 },
        { name: 'Don', age: 50 },
        { name: 'Susan', age: 21 }
      ]
    }
  },

  methods: {
    sortBy(sortKey) {
      this.reverse = (this.sortKey === sortKey) ? ! this.reverse : false

      this.sortKey = sortKey
    },

    addUser() {
      this.users.push(this.newUser)
      this.newUser = {}
    }
  }
}
</script>  
      
      
      products : [
        { idTea: 1, nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { idTea: 2, nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { idTea: 3, nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { idTea: 4, nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { idTea: 5, nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
      ],

      products : [
        [  '1',  'Alishan',  'oolong',  '5', 'some description' ],
        [  '2',  'Da Hong pao',  'oolong',  '10', 'some description' ],
        [  '3',  'Shue',  'puer',  '15', 'some description' ],
        [  '4',  'Alishan',  'oolong',  '5', 'some description' ],
        [  '5',  'Da Hong pao',  'oolong',  '10', 'some description' ],
      ],

        { 'idTea': 1, 'nameTea': 'Alishan', 'sortTea': 'oolong', 'priceTea': 5, 'descriptionTea':'some description' },
        { 'idTea': 2, 'nameTea': 'Da Hong pao', 'sortTea': 'oolong', 'priceTea': 10, 'descriptionTea':'some description' },
        { 'idTea': 3, 'nameTea': 'Shue', 'sortTea': 'puer', 'priceTea': 15, 'descriptionTea':'some description' },
        { 'idTea': 4, 'nameTea': 'Alishan', 'sortTea': 'oolong', 'priceTea': 5, 'descriptionTea':'some description' },
        { 'idTea': 5, 'nameTea': 'Da Hong pao', 'sortTea': 'oolong', 'priceTea': 10, 'descriptionTea':'some description' },





<template>
  <div class="between:flex bottom:margin-3">
    <div class="center:flex-items">
      <span class="right:margin-1">Show</span>
      <select v-model="currentEntries" class="select" @change="paginateEntries">
        <option v-for="se in showEntries" :key="se" :value="se">{{ se }}</option>
      </select> 
      <span class="left:margin-1">entries</span>
    </div>
    <div class="end:flex">
      <input v-model="searchInput" type="search" class="input px:width-25" placeholder="Search here..." @keyup="searchEvent">
    </div>
  </div>

  <table class="table table:border secondary-5:border">
    <thead>
      <tr>
        <th v-for="th in tableHeader" :key="th">
          <div class="between:flex center:items">
            <span>{{ th.text }}</span>
            <span @click.prevent="sortByColumn(th.name)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter none:event" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </span>
          </div>
        </th>
      </tr>
      <tr>
        <td>#</td>
        <td><input v-model="col.name" type="search" class="input" placeholder="Filter name..." @keyup="filterByColumn"></td>
        <td>
          <select v-model="col.position" class="select" @change="filterByColumn">
            <option value="">-- Filter position... --</option>
            <option v-for="cd in uniqColumnData('position')" :key="cd" :value="cd">{{ cd }}</option>
          </select>
        </td>
        <td>
          <select v-model="col.office" class="select" @change="filterByColumn">
            <option value="">-- Filter office... --</option>
            <option v-for="cd in uniqColumnData('office')" :key="cd" :value="cd">{{ cd }}</option>
          </select>
        </td>
        <td><input v-model="col.extension" type="search" class="input" placeholder="Filter extension..." @keyup="filterByColumn"></td>
        <td><input v-model="col.startdate" type="search" class="input" placeholder="Filter start date..." @keyup="filterByColumn"></td>
        <td><input v-model="col.salary" type="search" class="input" placeholder="Filter salary..." @keyup="filterByColumn"></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="td in tableData" :key="td">
        <td>{{ td.id }}</td>
        <td>{{ td.name }}</td>
        <td>{{ td.position }}</td>
        <td>{{ td.office }}</td>
        <td>{{ td.extension }}</td>
        <td>{{ td.startdate }}</td>
        <td>{{ td.salary }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="6">Only salaries of this page</th>
        <th>{{ pageSalaries }}</th>
      </tr>
      <tr>
        <th colspan="6">Total of all salaries</th>
        <th>{{ totalSalaries }}</th>
      </tr>
    </tfoot>
  </table>
  
  <div class="between:flex y:margin-3">
    <div class="start:flex-items">Show {{ showInfo.from }} to {{ showInfo.to }} of {{ showInfo.of }} entries</div>
    <div class="end:flex center:items">
      <ul class="pagination:nav">
        <li :class="['nav-item', { 'disabled': currentPage === 1 }]">
          <a href="#" class="nav-link" @click.prevent="currentPage = 1, paginateEntries()">First</a>
        </li>
        <li :class="['nav-item', { 'disabled': currentPage === 1 }]">
          <a href="#" class="nav-link" @click.prevent="(currentPage < 1) ? currentPage = 1 : currentPage -= 1, paginateEntries()">Prev</a>
        </li>
        <li v-for="pagi in showPagination" :key="pagi" :class="['nav-item', {'ellipsis': pagi === '...', 'active': pagi === currentPage}]">
          <a href="#" class="nav-link" @click.prevent="paginateEvent(pagi)">{{ pagi }}</a>
        </li>
        <li :class="['nav-item', { 'disabled': currentPage === allPages }]">
          <a href="#" class="nav-link" @click.prevent="(currentPage > allPages) ? currentPage = allPages : currentPage += 1, paginateEntries()">Next</a>
        </li>
        <li :class="['nav-item', { 'disabled': currentPage === allPages }]">
          <a href="#" class="nav-link" @click.prevent="currentPage = allPages, paginateEntries()">Last</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { $array, $object } from '../assets/alga.min.js'

export default {
  name: 'DataTable',
  data() {
    return {
      columns: [
        { name: 'id', text: 'ID' },
        { name: 'name', text: 'Name' },
        { name: 'position', text: 'Position' },
        { name: 'office', text: 'Office' },
        { name: 'extension', text: 'Extension' },
        { name: 'startdate', text: 'Start Date' },
        { name: 'salary', text: 'Salary' },
      ],
      entries: [],
      showEntries: [5, 10, 15, 25, 50, 75, 100],
      currentEntries: 10,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: '',
      searchEntries: [],
      col: {
        name: '',
        position: '',
        office: '',
        extension: '',
        startdate: '',
        salary: ''
      },
      sortcol: {
        name: '',
        position: '',
        office: '',
        extension: '',
        startdate: '',
        salary: ''
      }
    }
  },
  computed: {
    showInfo() {
      return $array.show(this.getCurrentEntries())(this.currentPage, this.currentEntries)
    },
    showPagination() {
      return $array.pagination(this.allPages, this.currentPage, 3)
    },
    tableHeader() {
      return this.columns
    },
    tableData() {
      return this.filteredEntries
    },
    pageSalaries() {
      return $array.sum(this.filteredEntries, 'salary')
    },
    totalSalaries() {
      return $array.sum(this.entries, 'salary')
    }
  },
  created() {
    this.getAllEmployees().then(res => {
      this.entries = res.data
      this.paginateData(this.entries)
      // this.filteredEntries = $array.paginate(this.entries)(this.currentPage, this.currentEntries)
      // this.allPages = $array.pages(this.entries, this.currentEntries)
    })
  },
  methods: {
    async getAllEmployees() {
      const response = await fetch('http://localhost:3011/employee')
      return response.json()
    },
    paginateEntries() {
      if(this.searchInput.length >= 3) {
        this.searchEntries = $array.search(this.searchInput)(this.entries)
        this.paginateData(this.searchEntries)
        // this.filteredEntries = $array.paginate(this.searchEntries)(this.currentPage, this.currentEntries)
        // this.allPages = $array.pages(this.searchEntries, this.currentEntries)
      } else {
        this.searchEntries = []
        this.paginateData(this.entries)
        this.col = {
          name: '',
          position: '',
          office: '',
          extension: '',
          startdate: '',
          salary: ''
        }
        // this.filteredEntries = $array.paginate(this.entries)(this.currentPage, this.currentEntries)
        // this.allPages = $array.pages(this.entries, this.currentEntries)
      }
    },
    paginateEvent(page) {
      this.currentPage = page
      this.paginateEntries()
    },
    searchEvent() {
      this.currentPage = 1
      this.paginateEntries()
    },
    paginateData(data) {
      this.filteredEntries = $array.paginate(data)(this.currentPage, this.currentEntries)
      this.allPages = $array.pages(data, this.currentEntries)
    },
    getCurrentEntries() {
      return (this.searchEntries.length <= 0) ? this.entries : this.searchEntries
    },
    uniqColumnData(column) {
      return $array.unique(this.getCurrentEntries(), column)
    },
    filterByColumn() {
      const filterCol = $object.removeBy('')(this.col)
      let filterData = this.getCurrentEntries()
      if(Object.entries(filterCol).length >= 1) {
        filterData = $array.filtered(...Object.values(filterCol))(this.getCurrentEntries(), Object.keys(filterCol))
      }
      this.paginateData(filterData)
    },
    sortByColumn(column) {
      this.col = {
        name: '',
        position: '',
        office: '',
        extension: '',
        startdate: '',
        salary: ''
      }
      let sortedEntries = this.getCurrentEntries()
      const sortedColumn = this.sortcol[column]
      if(sortedColumn === '') {
        this.sortcol[column] = 'asc'
        sortedEntries = $array.sorted(this.getCurrentEntries())(column, 'asc')
      } else if(sortedColumn === 'asc') {
        this.sortcol[column] = 'desc'
        sortedEntries = $array.sorted(this.getCurrentEntries())(column, 'desc')
      } else if(sortedColumn === 'desc') {
        this.sortcol[column] = ''
      }
      this.paginateData(sortedEntries)
    }
  }
}
</script>
























<template>
    <div class="container">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" @input="onSearch">
        <h3 class="p-3 text-center">Catalog products</h3>
        <table class="table">
  <thead>
    <tr>
       <th v-for="(column, index) in columns"
           :key="index"
           class="border-2 p-2 text-left"
           @click="sortRecords(index)"
    >{{column}}
       </th>
      <!-- <th class="border-2 p-2" scope="col" @click="sortByName">Name of tea</th>
      <th class="border-2 p-2" scope="col" @click="sortBySort">Sort</th>
      <th class="border-2 p-2" scope="col" @click="sortByPrice">Price ($)</th>
      <th class="border-2 p-2" scope="col">Discription</th>
      <th class="border-2 p-2" scope="col">Action</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td >{{product.nameTea}}</td> 
      <td >{{product.sortTea}}</td>      
      <td >{{product.priceTea}}</td>      
      <td >{{product.descriptionTea}}</td>      
      <td >{{product.action}}</td>      
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>

const performSearch = (rows, term) =>{
  const results = rows.filter(
    (    row) => row.join(' ').toLowerCase().includes(term.toLowerCase())
  )
  return results
}

export default {
  data() {
    return{
      rows: [],
      columns: [
        'Name of tea', 'Sort', 'Price', 'Discription', 'Action'
      ],
      products : [
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description', action: 'vrv' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' }
      ],
      sortIndex:null,
      sortDirection: null
    }
  },
  mounted() {
    this.rows=[...this.products]
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

    // sortByName(): void {
    //   this.products.sort((a,b)=>a.nameTea.localeCompare(b.nameTea))
    // },
    // sortBySort(): void {
    //   this.products.sort((a,b)=>a.sortTea.localeCompare(b.sortTea))
    // },
    // sortByPrice(): void {
    //   this.products.sort((a,b)=>a.priceTea.localeCompare(b.priceTea))
    // },


    onSearch (e)  {
      const term = e.target.value
      this.rows = performSearch(this.rows, term)
    }
  },
  
}
</script>





<template>
    <div class="container">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" @input="onSearch">
        <h3 class="p-3 text-center">Catalog products</h3>
        <table class="table">
  <thead>
    <tr>
      <th class="border-2 p-2" scope="col" @click="sortByName">Name of tea</th>
      <th class="border-2 p-2" scope="col" @click="sortBySort">Sort</th>
      <th class="border-2 p-2" scope="col" @click="sortByPrice">Price ($)</th>
      <th class="border-2 p-2" scope="col">Discription</th>
      <th class="border-2 p-2" scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td >{{product.nameTea}}</td> 
      <td >{{product.sortTea}}</td>      
      <td >{{product.priceTea}}</td>      
      <td >{{product.descriptionTea}}</td>      
      <td >{{product.action}}</td>      
    </tr>
  </tbody>
</table>
    </div>
</template>

<script lang='ts'>

const performSearch = (rows: any[], term: string) =>{
  const results = rows.filter(
    (    row: any[]) => row.join(' ').toLowerCase().includes(term.toLowerCase())
  )
  return results
}

export default {
  data() {
    return{
      rows: [],
      products : [
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description', action: 'vrv' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },
        { nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: '10', descriptionTea:'some description' },
        { nameTea: 'Shue', sortTea: 'puer', priceTea: '15', descriptionTea:'some description' },
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' }
      ],
      sortIndex:null 
    }
  },
  //   mounted() :void {
  //     this.rows=this.products
  //   },
  methods: {
    sortByName(): void {
      this.products.sort((a,b)=>a.nameTea.localeCompare(b.nameTea))
    },
    sortBySort(): void {
      this.products.sort((a,b)=>a.sortTea.localeCompare(b.sortTea))
    },
    sortByPrice(): void {
      this.products.sort((a,b)=>a.priceTea.localeCompare(b.priceTea))
    },
    // onSearch (e: { target: { value: void } })  {
    //   const term = e.target.value
    //   this.rows = performSearch(this.rows, term)
    // }
  },
  
}
</script>




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


