
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
          <th >
            <div class="d-flex flex-row">
              <input v-model="idTeaFilter" class="form-control m-2" placeholder="Filter number" @keyup="FilterFn()">

              <button type="button" class="btn btn-light" @click="sort('numberTea',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </button>

              <button type="button" class="btn btn-light" @click="sort('numberTea',false)">
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
        <button v-if="idTea!=0" type="button"  class="btn btn-primary m-2 fload-end"  @click="updateClick()">Update</button>

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
// }

// const sortBynameTea = (d1,d2)=>(d1.nameTea.toLowerCase()>d2.nameTea.toLowerCase())?1:-1,
export default {
  data() {
    return {
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
      withoutFilter:[],
      products : [
        { idTea: 1, nameTea: 'Alishan', sortTea: 'oolong', priceTea: 5, descriptionTea:'some description' },
        { idTea: 2, nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: 10, descriptionTea:'some description' },
        { idTea: 3, nameTea: 'Shue', sortTea: 'puer', priceTea: 15, descriptionTea:'some description' },
        { idTea: 4, nameTea: 'Alishan', sortTea: 'oolong', priceTea: 5, descriptionTea:'some description' },
        { idTea: 5, nameTea: 'Da Hong pao', sortTea: 'oolong', priceTea: 10, descriptionTea:'some description' },
      ],
    }
  },
  computed:{
    sortedTeas() {
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
      this.idTea=''
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

    },
    createClick() {
      const { products, nameTea, sortTea, priceTea, descriptionTea } = this
      this.products = [...products, {
        idTea: this.products.length +1,
        nameTea,
        sortTea,
        priceTea,
        descriptionTea
      }]
    },
    updateClick(id) {
      //  code
    },
    deleteClick(index) {
      this.products.pop(index, 1)
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
