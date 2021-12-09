<template>
    <div class="container">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
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
        { nameTea: 'Alishan', sortTea: 'oolong', priceTea: '5', descriptionTea:'some description' },


      ]
    }
  },
  mounted() :void {
    this.rows=this.products
  },
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
    onSearch (e: { target: { value: any } })  {
      const term = e.target.value
      this.rows = performSearch(this.rows,term)
    }
  },
  
}
</script>



