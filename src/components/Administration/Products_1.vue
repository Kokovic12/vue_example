
<template>
  <div>

    <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()"> Add Tea</button>

      <!-- <div id="demo">
      <form id="search">
        Search <input v-model="searchQuery" name="query" />
      </form>
      <demo-grid
        :teas="products"
        :columns="gridColumns"
        :filter-key="searchQuery"
      >
      </demo-grid>
    </div> -->
      
    <table class="table table-striped">
      <thead>
        <tr>
          <th @click="sort('idTea')">
            <div class="d-flex flex-row">
              <input v-model="idTeaFilter" class="form-control m-2" placeholder="Filter number" @keyup="FilterFn()">

              <button type="button" class="btn btn-light" @click="sortResult('idTea',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </button>

              <button type="button" class="btn btn-light" @click="sortResult('idTea',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
              </button>

            </div>
            Number
          </th>
          <th @click="sort('nameTea')">
            <div class="d-flex flex-row">
              <input v-model="nameTeaFilter" icon='search' class="form-control m-2" placeholder="Filter name" @keyup="FilterFn()">

              <button type="button" class="btn btn-light" @click="sortResult('nameTea',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </button>

              <button type="button" class="btn btn-light" @click="sortResult('nameTea',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
              </button>
              
            </div>
            Name of tea
          </th>
          <th @click="sort('sortTea')">
            <div class="d-flex flex-row">
              <input v-model="sortTeaFilter" class="form-control m-2" placeholder="Filter sort" @keyup="FilterFn()">

              <button type="button" class="btn btn-light" @click="sortResult('sortTea',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </button>

              <button type="button" class="btn btn-light" @click="sortResult('sortTea',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
              </button>
              
            </div>            
            Sort
          </th>
          <th @click="sort('priceTea')">
            <div class="d-flex flex-row">
              <input v-model="priceTeaFilter" icon='search' class="form-control m-2" placeholder="Filter price" @keyup="Filter()">

              <button type="button" class="btn btn-light" @click="sortResult('priceTea',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </button>

              <button type="button" class="btn btn-light" @click="sortResult('priceTea',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
              </button>
              
            </div>
            Price
          </th>
          <th>
            Discription
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in sortedTeas" :key="product.id">
          <td>{{product.idTea}}</td>
          <td >{{product.nameTea}}</td> 
          <td >{{product.sortTea}}</td>      
          <td >{{product.priceTea}}</td>      
          <td >{{product.descriptionTea}}</td>  
          <td>
            <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(product)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </button>
            <button type="button" class="btn btn-light mr-1" @click="deleteClick(index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </button>
            </td>
        </tr>
      </tbody>
    </table>

    <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="exampleModalLabel" class="modal-title">{{modalTitel}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

        <div class="modal-body">
          <div class="input-group mb-3"></div>
            <span class="input-group-text">name of Tea</span>
            <input v-model="nameTea" type="text" class="form-control">
            <span class="input-group-text">sort of Tea</span>
            <input v-model="sortTea" type="text" class="form-control">
            <span class="input-group-text">price of Tea</span>
            <input v-model="priceTea" type="text" class="form-control">
            <span class="input-group-text">description of Tea</span>
            <input v-model="descriptionTea" type="text" class="form-control">
        </div>

        <button v-if="idTea==0" type="button" class="btn btn-primary m-2 fload-end"  @click="createClick()">Create</button>
        <button v-if="idTea!=0" type="button"  class="btn btn-primary m-2 fload-end"  @click="updateClick(index)">Update</button>

      </div>
      </div>
    </div>

  </div>
</template>


<script>
// const performSearch = (rows, term) => {
//   const results = rows.filter(
//     row => row.join(' ').toLowerCase().includes(term.toLowerCase())
//   )
//   return results


// const sortByidTea = (d1,d2)=>(d1.idTea.toLowerCase()>d2.idTea.toLowerCase())?1:-1
// const sortBynameTea = (d1,d2)=>(d1.nameTea.toLowerCase()>d2.nameTea.toLowerCase())?1:-1
// const sortBysortTea = (d1,d2)=>(d1.sortTea.toLowerCase()>d2.sortTea.toLowerCase())?1:-1
// const sortBypriceTea = (d1,d2)=>(d1.priceTea.toLowerCase()>d2.priceTea.toLowerCase())?1:-1

export default {
  data() {
    return {
      // updateIndex: 0,
      teas:[],
      currentSort:'name',
      currentSortDir:'asc',
      modalTitle:'',
      idTea: 0,
      nameTea:'',
      sortTea:'',
      priceTea:'',
      descriptionTea:'',
      idTeaFilter:'',
      nameTeaFilter:'',
      sortTeaFilter:'',
      priceTeaFilter:'',
      // sortParam:'',
      withoutFilter:[],
      products : [
        { idTea: 1 , nameTea: 'Alishan', sortTea: 'oolong', priceTea: 5, descriptionTea:'some description' },
        { idTea: 2, nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: 10, descriptionTea:'some description' },
        { idTea: 3, nameTea: 'Shue', sortTea: 'puer', priceTea: 15, descriptionTea:'some description' },
        { idTea: 4, nameTea: 'Alishan', sortTea: 'oolong', priceTea: 5, descriptionTea:'some description' },
        { idTea: 5, nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: 10, descriptionTea:'some description' },
      ],
    }
  },
  computed:{
    
    sortedTeas() {
      // switch(this.sortParam) {
      //   case 'idTea':return this.products.sort(sortByidTea)
      //   case 'nameTea':return this.products.sort(sortBynameTea)
      //   case 'sortTea':return this.products.sort(sortBysortTea)
      //   case 'priceTea':return this.products.sort(sortBypriceTea)
      //   default: return this.products
      // }
      
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.products.sort((a,b)=>{
        let modifier = 1
        if(this.currentSortDir==='desc')modifier = -1
        if(a[this.currentSort] < b[this.currentSort]) return -1*modifier
        if(a[this.currentSort] > b[this.currentSort]) return 1*modifier
        return 0
      })
    }
  },

  methods:{
    sort(s) {
      if(s=== this.currentSort) {
        this.currentSortDir=this.currentSortDir==='asc'?'desc':'asc'
      }
      this.currentSort=s
    },

    addClick() {
      this.modalTitle='Add Tea'
      this.idTea=this.products.length + 1
      this.nameTea=''
      this.sortTea=''
      this.priceTea=''
      this.descriptionTea=''
      
    },
    editClick(product) {
      this.modalTitle='Edit Tea'
      this.idTea=product.idTea
      this.nameTea=product.nameTea
      this.sortTea=product.sortTea
      this.priceTea=product.priceTea
      this.descriptionTea=product.descriptionTea
      
      // this.updateIndex = product.index
      // this.product=this.products[product.index]

    },
    createClick() {
      const { products, nameTea, sortTea, priceTea, descriptionTea } = this
      this.products = [...products, {
        nameTea,
        sortTea,
        priceTea,
        descriptionTea
      }]
    },
    updateClick(id) {
      // this.products[this.this.updateIndex]=this.product
      // this.product = {
      //   nameTea: '',
      //   sortTea: '',
      //   priceTea: '',
      //   description:''
      // }
    },
    deleteClick(index) {
      if(window.confirm('Do you really want to delete item?')) {
        this.products.splice(index, 1)}
    },

    // computed:{
    //   FilterFn() {
    //     const { idTeaFilter, nameTeaFilter, sortTeaFilter, priceTeaFilter } = this

    //     this.products=this.withoutFilter.filter(
    //       (el) =>(el.idTea.toString().toLowerCase().includes(idTeaFilter.toString().trim().toLowerCase())
    //       &&
    //       el.nameTea.toString().toLowerCase().includes(nameTeaFilter.toString().trim().toLowerCase())
    //       &&
    //       el.sortTea.toString().toLowerCase().includes(sortTeaFilter.toString().trim().toLowerCase())
    //       &&
    //       el.priceTea.toString().toLowerCase().includes(priceTeaFilter.toString().trim().toLowerCase()))
    //     )
    //   },
    // },

    // Filter() {
    //   const pr=this.priceTea
    //   return this.products.filter((elem) => {
    //     if(pr==='') return true
    //     return elem.priceTea.indexOf(pr) > -1
    //   })
    // }


    // sortResult(prop,asc) {
    //   this.products=this.withoutFilter.sort((a,b) => {
    //     if(asc) {
    //       if (a[prop]>b[prop]) {
    //         return 1
    //       } 
    //       if(a[prop]<b[prop]) {
    //         return -1
    //       } 
    //       return 0
            
    //     } 
    //     if ((b[prop]>a[prop])) {
    //       return 1
    //     } 
    //     if ((b[prop]<a[prop])) {
    //       return -1
    //     } 
    //     return 0     
    //   })
    // },
  }
}
</script>
























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


