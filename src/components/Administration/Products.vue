<template>
  <div>
      <Toolbar class="p-mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" :disabled="!selectedProducts || !selectedProducts.length" @click="confirmDeleteSelected" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="p-mr-2 p-d-inline-block" />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

        <DataTable  v-model:selection="selectedCars" :value="products" selectionMode="multiple" 
                    :paginator="true" :rows="12" 
                    :scrollable="true" scrollHeight="700px">
            <Column selectionMode="multiple"></Column>
            <Column field="name" header="Name" :sortable="true"></Column>
            <Column field="sort" header="Sort" :sortable="true"></Column>
            <Column field="price" header="Price" :sortable="true"></Column>
            <Column field="description" header="Description" :sortable="true"></Column>
        </DataTable>

    </div>
</template>


<script>
import { FilterMatchMode } from 'primevue/api'

export default {
  data() {
    return {
      products: [
        { 'id': 1, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 2, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 3, 'name': 'Shue', 'sort': 'puer', 'price': 15, 'description':'some description' },
        { 'id': 4, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 5, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 6, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 7, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 8, 'name': 'Shue', 'sort': 'puer', 'price': 15, 'description':'some description' },
        { 'id': 9, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 10, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 11, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 12, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 13, 'name': 'Shue', 'sort': 'puer', 'price': 15, 'description':'some description' },
        { 'id': 14, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 15, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 16, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 17, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' },
        { 'id': 18, 'name': 'Shue', 'sort': 'puer', 'price': 15, 'description':'some description' },
        { 'id': 19, 'name': 'Alishan', 'sort': 'oolong', 'price': 5, 'description':'some description' },
        { 'id': 20, 'name': 'Da Hong pao', 'sort': 'oolong', 'price': 10, 'description':'some description' }
      ],
      columns: null,
      
    }
  },
  created() {

  },
}</script>

<style lang="scss" scoped>

</style>

