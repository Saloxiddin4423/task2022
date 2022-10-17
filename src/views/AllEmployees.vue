
<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Position</th>
                <th scope="col">Gender</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Date of birth</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in res " :key="index">
                <th scope="row">{{index +1}}</th>
                <td>{{item.name}} </td>
                <td>{{item.department}}</td>
                <td>{{item.position}}</td>
                <td>{{item.gender}}</td>
                <td>{{item.date}}</td>
                <td>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Do you want to delete this user?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                    <RouterLink to="/"> <button type="button" data-bs-dismiss="modal"
                                            @click="deleteItem(item.date)" class="btn btn-danger">Yes</button>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="bi bi-trash text-danger fs-5"></i>
                    <RouterLink :to="{path : '/updete', query:{id:item.date} }"> <i
                            class=" fs-5 ms-3 text-info bi bi-pencil"></i></RouterLink>
                    <RouterLink :to="{path : '/acaunt', query:{id:item.date} }"> <i
                            class="bi bi-person-circle ms-3 fs-5 text-success"></i></RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

let res = ref(JSON.parse(localStorage.getItem("data")))
const deleteItem = (id) => {
    localStorage.setItem('data', JSON.stringify(res.value.filter((item) => item.date !== id)))
    res.value = JSON.parse(localStorage.getItem("data"))
}

</script>