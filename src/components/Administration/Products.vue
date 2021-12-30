<template>
  <div>
    <div class="card">
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


      <DataTable ref="dt" v-model:selection="selectedProducts" v-model:editingRows="editingRows" :value="products"
                    dataKey="id" :paginator="true" :rows="12" :scrollable="true"  
                    :filters="filters" 
                    selectionMode="multiple"
                    scrollHeight="700px" editMode="row"  @row-edit-save="onRowEditSave">

          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
						  <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Manage Products</h5>
						  <span class="p-input-icon-left">
                <i class="pi pi-search" />
                  <InputText v-model="filters['global'].value" placeholder="Search..." />
              </span>
					  </div>
          </template>

            <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
            <Column field="name" header="Name" :sortable="true" style="min-width:12rem">
              <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.field]" autofocus/>
              </template>
            </Column>
            <Column field="sort" header="Sort" :sortable="true" style="min-width:10rem"></Column>
            <Column field="price" header="Price" :sortable="true" style="min-width:8rem"></Column>
            <Column field="description" header="Description" :sortable="true" style="min-width:12rem"></Column>
            <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
        </DataTable>
      </div>

      <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <div class="p-field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small v-if="submitted && !product.name" class="p-error">Name is required.</small>
            </div>
            <div class="p-field">
                <label for="sort">Sort</label>
                <InputText id="sort" v-model.trim="product.sort" required="true" autofocus :class="{'p-invalid': submitted && !product.sort}" />
                <small v-if="submitted && !product.sort" class="p-error">Sort is required.</small>
            </div>
            <div class="p-field">
                <label for="price">Price</label>
                <InputText id="price" v-model.trim="product.price" required="true" autofocus :class="{'p-invalid': submitted && !product.price}" />
                <small v-if="submitted && !product.price" class="p-error">Price is required.</small>
            </div>
            <div class="p-field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
            </template>
        </Dialog>

    </div>
</template>


<script>
import {
  ref,
  onMounted,
  defineComponent
} from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import ProductService from '@/services/ProductService'

export default defineComponent ({
  setup() {
    const productService = ref(new ProductService())
    const products = ref()

    onMounted(() => {
      // eslint-disable-next-line no-return-assign
      productService.value.getProducts().then(data => products.value = data)
    })

    const toast = useToast()
    const dt = ref()
    const productDialog = ref(false)
    const deleteProductDialog = ref(false)
    const deleteProductsDialog = ref(false)
    const product = ref({})
    const selectedProducts = ref()
    
    const filters = ref({
      'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    })

    const openNew = () => {
      product.value = {}
      // eslint-disable-next-line no-undef
      submitted.value = false
      productDialog.value = true
    }

    const hideDialog = () => {
      productDialog.value = false
      // eslint-disable-next-line no-undef
      submitted.value = false
    }
    
    const saveProduct = () => {
      // eslint-disable-next-line no-undef
      submitted.value = true
      if (product.value.name.trim()) {
        if (product.value.id) {
          product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus
          // eslint-disable-next-line no-use-before-define
          products.value[findIndexById(product.value.id)] = product.value
          toast.add({ severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000 })
        }
        else {
          // eslint-disable-next-line no-use-before-define
          product.value.id = createId()
          // eslint-disable-next-line no-use-before-define
          product.value.code = createId()
          product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK'
          products.value.push(product.value)
          toast.add({ severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000 })
        }

        productDialog.value = false
        product.value = {}
      }
    }

    const editProduct = (prod) => {
      product.value = { ...prod }
      productDialog.value = true
    }

    const confirmDeleteProduct = (prod) => {
      product.value = prod
      deleteProductDialog.value = true
    }
    const deleteProduct = () => {
      products.value = products.value.filter(val => val.id !== product.value.id)
      deleteProductDialog.value = false
      product.value = {}
      toast.add({ severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 })
    }
    const findIndexById = (id) => {
      let index = -1
      for (let i = 0; i < products.value.length; i+1) {
        if (products.value[i].id === id) {
          index = i
          break
        }
      }

      return index
    }
    const createId = () => {
      let id = ''
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for ( let i = 0; i < 5; i+1 ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return id
    }
    const exportCSV = () => {
      dt.value.exportCSV()
    }
    const confirmDeleteSelected = () => {
      deleteProductsDialog.value = true
    }
    const deleteSelectedProducts = () => {
      products.value = products.value.filter(val => !selectedProducts.value.includes(val))
      deleteProductsDialog.value = false
      selectedProducts.value = null
      toast.add({ severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 })
    }



    return { saveProduct, products, productService,deleteSelectedProducts, confirmDeleteSelected, exportCSV, createId, findIndexById, deleteProduct, confirmDeleteProduct, editProduct, hideDialog, openNew, filters }
  }
})
</script>

<style lang="scss" scoped>

</style>


