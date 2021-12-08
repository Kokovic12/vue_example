<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.brand }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.rating }}</td>
    </tr>
</template>
 
<script>
export default {
  props: ['product']
}
</script>