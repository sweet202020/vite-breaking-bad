<script>
export default {
    name: 'SiteMain',
    props: {
        poster: String,
        name: String,
        isAlive: String,
    }
}
</script>


<template>
    <div class="card">
        <div class="col">
            <img :src="poster" alt="">
            <h3>{{ name }}</h3>
            <p>{{ isAlive }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 240px;
    aspect-ratio: 1/1;
    object-fit: contain;
}
</style>