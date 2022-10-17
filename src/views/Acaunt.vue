
<template>
    <div class="container m-auto">
        <div class="card m-auto mt-5">
            <img :src="image" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{department}}</li>
                <li class="list-group-item">{{position}}</li>
                <li class="list-group-item">{{date}}</li>
            </ul>
            <div class="card-body">
                <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{{name}}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Do you want to delete this user?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                        <RouterLink to="/"> <button type="button" data-bs-dismiss="modal" @click="deleteItem()"
                                        class="btn btn-danger">Yes</button> </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="bi bi-trash text-danger fs-5"></i> 
                <RouterLink :to="{path : '/updete', query:{id:date} }"> <i class=" fs-5 ms-3 text-info bi bi-pencil"></i></RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import { ref } from "vue"
const route = useRoute();
let data = JSON.parse(localStorage.getItem("data"))
let name = ref(0)
let department = ref(0)
let position = ref(0)
let gender = ref(0)
let date = ref(0)
let image = ref(0)

 console.log(route.query.id);
data.forEach(elem => {
    if (elem.date == route.query.id) {
        name.value = elem.name
        department.value = elem.department
        position.value = elem.position
        gender.value = elem.gender
        date.value = elem.date
        image.value = elem.gender == "male"?" /src/assets/men.jpg":"/src/assets/person.jpg"
    }
});

let res = ref(JSON.parse(localStorage.getItem("data")))
const deleteItem = (id) => {
    localStorage.setItem('data', JSON.stringify(res.value.filter((item) => item.date !== date.value)))
    res.value = JSON.parse(localStorage.getItem("data"))
}

</script>
