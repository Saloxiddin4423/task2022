<template>
  <form class="w-50 m-auto">
    <div class="mb-3  ">
      <label for=" " :class="color1">Full name</label>
      <input @keyup="yoz" type="text" v-model="name" class="form-control" id=" ">
    </div>
    <div class="mb-3  ">
      <label for="" :class="color2">Department</label>
      <select @click="yoz"  class="form-select" v-model="department">
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Accounting">Accounting</option>
      </select>
    </div>
    <div class="mb-3">
      <label for=" " :class="color3">Position</label>
      <input  @keyup="yoz" type="text" v-model="position" class="form-control" id=" ">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" v-on:input="getGender" value="male" type="radio" name="flexRadioDefault">
        <label :class="color5"   for="flexRadioDefault1">
          Male
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" v-on:input="getGender" value="Women" type="radio" name="flexRadioDefault">
        <label :class="color5"  for="flexRadioDefault2">
          Women
        </label>
      </div>
    </div>
    <div class="mb-3">
      <label  :class="color4">Date of birth</label>
      <input @click="yoz" type="date" v-model="date" class="form-control" id=" ">
    </div>
    <button @click.prevent="validation" :data-bs-toggle="modal" data-bs-target="#exampleModal"
      class="btn btn-primary">Submit</button>
  </form>
  <RouterView />
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{name}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure you want to add this user?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
          <RouterLink to="/allEmployees">

          <button @click="AddUser" type="button" data-bs-dismiss="modal" class="btn btn-secondary text-light">
              Save changes
          </button>
        </RouterLink>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { RouterLink, RouterView } from 'vue-router'
let name = ref("")
let department = ref("")
let position = ref("")
let gender = ref("")
let modal = ref("");
let date = ref("");
let color1 = ref("")
let color2 = ref("")
let color3 = ref("")
let color4 = ref("")
let color5 = ref("")


const getGender = (e) => {
  gender.value = e.target.value
  color5.value = "text-dark "

}
let data = []
 const yoz  = ()=>{
  color1.value = "text-dark "
  color2.value ="text-dark "
  color3.value ="text-dark "
  color4.value = "text-dark "
  color5.value = "text-dark "
 }
const validation = () => {
  if (position.value !== "" && name.value !== "" && department.value !== "" && gender.value !== "" && date.value !== "") {
    modal.value = "modal"
  } if (name.value == "") {
    color1.value = "text-danger "
  }
  if (department.value == "") {
    color2.value = "text-danger "
  } if (position.value == "") {
    color3.value = "text-danger "
  } if (date.value == "") {
    color4.value = "text-danger "
  }
  if (gender.value == "") {
    color5.value = "text-danger "
  }
}

function AddUser() {
  if (localStorage.getItem("data")) {
    let res = localStorage.getItem("data")
    JSON.parse(res).forEach(elem => {
      data.push(elem)
    });
    let person = {
      name: name.value,
      department: department.value,
      position: position.value,
      gender: gender.value,
      date: date.value,
    }
    data.push(person)
    localStorage.setItem('data', JSON.stringify(data))
    data = null
  } else {
    let person = {
      name: name.value,
      department: department.value,
      position: position.value,
      gender: gender.value,
      date: date.value,
    }
    data.push(person)
    localStorage.setItem('data', JSON.stringify(data))
    data = null
  }
}
</script>
<style>

</style>