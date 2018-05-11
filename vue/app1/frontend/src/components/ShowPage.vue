<template>
    <div>
        <h1>{{movie.name}} 상세내용1</h1>
        <ul>
            <li>제목 : {{movie.name}}</li>
            <li>감독 : {{movie.director}}</li>
            <li>년도 : {{movie.year}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        created(){
            var id = this.$route.params.id;
            console.log('id:', id);
            var url = `/api/movies/${id}`;
            console.log(url);
            this.$http.get(url)
            .then( (response) => {
                console.log('data:', response.data);
                this.movie = response.data[0];
            });
        },
        data(){
            return {
                movie : {}
            }
        }
    }
</script>

<style scoped>

</style>