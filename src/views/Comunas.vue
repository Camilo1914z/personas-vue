<template>
    <div class="container">
        <h1>Listado de comunas</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Municipality</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(comuna,index) in comunas" :key="index">
                <th scope="row"> {{index+1}}</th>
                 <td>{{ comuna.comu.codi }}</td>
                <td>{{ comuna.comu.nomb }}</td>
                <td>{{comuna.muni.nomb}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
//import { get } from 'http'

export default {

    name:'Comuna',

    data(){
        return{

            comunas:[]
        }
    },

    mounted(){

        axios
            .get('http://127.0.0.1:8000/api/comunas')
            .then(response  => (this.comunas = response.data.comunas))
    },
}

</script>