
<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Employees</th>
        <th scope="col">Employees in each department</th>
        <th scope="col">Average age </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td> <b @click="filtergender('All')">All: </b>{{res.length}}</td>
        <td>
        <td><b @click="filterdepartment('IT' )">IT: </b>{{it}}</td>

        </td>
        <td>

        </td>
      </tr>
      <tr>
        <th scope="row"> 2</th>
        <td @click="filtergender( 'male')"><b>Men: </b>{{men}} </td>
        <td>
        <td @click="filterdepartment('Marketing')"><b>Marketing:</b>{{marketing}} </td>
        </td>
        <td> <b>Average</b>: {{average/res.length}}</td>
      </tr>
      <tr>
        <th scope="row">3 </th>
        <td @click="filtergender( 'Women' )"><b>Women: </b> {{women}} </td>
        <td>
        <td @click="filterdepartment('Accounting' )"><b>Accounting:</b>{{accounting}}</td>
        </td>
        <td></td>
      </tr>

    </tbody>
  </table>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Department</th>
        <th scope="col">Position</th>
        <th scope="col">Gender</th>
        <th scope="col">Date of birth</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data " :key="index">
        <th scope="row">{{index +1}}</th>
        <td>{{item.name}} </td>
        <td>{{item.department}}</td>
        <td>{{item.position}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.date}}</td>

      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref } from 'vue';
let res = JSON.parse(localStorage.getItem("data"))
let men = ref(0)
let women = ref(0)
let it = ref(0)
let marketing = ref(0)
let accounting = ref(0)
let average = ref(0)
let vaqt = new Date().getFullYear()
let data = ref([])

const filterdepartment = (dep) => {
  res.filter(elem => {
    if (elem.department == dep) {
      data.value.push(elem)
    }
  })
}
const filtergender = (filt) => {
  res.filter(elem => {
    if (elem.gender == filt) {
      data.value.push(elem)
    }
  })
}
res.forEach(elem => {
  elem.gender == "male" ? men.value += 1 : women.value += 1
  if (elem.department == "Marketing") {
    marketing.value += 1
  } if (elem.department == "Accounting") {
    accounting.value += 1
  }
  if (elem.department == "IT") {
    it.value += 1
  }
  average.value += ((vaqt - + elem.date.slice(0, 4)))
});

</script>
