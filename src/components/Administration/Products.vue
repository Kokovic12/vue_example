<template>
  <div>
    <div id="demo" class="container">
  <input v-model="search" class="form-control" placeholder="Filter users by name or age">

  <table class="table table-striped">
    <thead>
      <tr>
        <th v-repeat="column: columns">
          <a v-class="active: sortKey == column" href="#" v-on="click:sortBy(column)">
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
  <button type="submit" class="btn btn-primary" @click="addUser">Add</button>
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

<style lang="">
  body {
  margin: 2em 0;
}

a {
  font-weight: normal;
  color: blue;
}

a.active {
  font-weight: bold;
  color: black;
}

</style>