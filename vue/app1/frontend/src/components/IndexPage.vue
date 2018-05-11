<template>
    <div>
        <h1>영화목록</h1>
        <div v-for="movie in movies">
            <img v-bind:src="movie.poster">
            <div>
                <strong>{{movie.name}}({{movie.year}})-{{movie.director}}</strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.axios.get('/api/movies')
            .then( (response) => {
                console.log(response.data);
                this.movies = response.data;
            })
        },
        data () {
            return {
                movies :[]
            }
        }
    }
</script>

<style scoped>

</style>