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











<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          v-slot="{ ariaDescribedby }"
          label="Sort"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>

            <b-form-select
              v-model="sortDesc"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Initial sort"
          label-for="initial-sort-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="initial-sort-select"
            v-model="sortDirection"
            :options="['asc', 'desc', 'last']"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          v-slot="{ ariaDescribedby }"
          v-model="sortDirection"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="age">Age</b-form-checkbox>
            <b-form-checkbox value="isActive">Active</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      v-model:sort-by="sortBy"
      v-model:sort-desc="sortDesc"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" class="mr-1" @click="info(row.item, row.index, $event.target)">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
        { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
        {
          isActive: false,
          age: 9,
          name: { first: 'Mini', last: 'Navarro' },
          _rowVariant: 'success'
        },
        { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
        { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
        { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
        { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
        {
          isActive: true,
          age: 87,
          name: { first: 'Larsen', last: 'Shaw' },
          _cellVariants: { age: 'danger', isActive: 'warning' }
        },
        { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
        { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
        { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
        { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
      ],
      fields: [
        { key: 'name', label: 'Person full name', sortable: true, sortDirection: 'desc' },
        { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
        {
          key: 'isActive',
          label: 'Is Active',
          formatter: (value, key, item) => value ? 'Yes' : 'No',
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        { key: 'actions', label: 'Actions' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: 'Show a lot' }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>