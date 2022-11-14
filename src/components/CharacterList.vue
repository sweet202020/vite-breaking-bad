<script>
export default {
    name: 'CharacterList',
    props: {
        characters: Object,
    }
}
</script>


<template>

    <div class="card" v-for="character in characters">
        <div class="col">
            <img :src="character.img" alt="">
            <h3>{{ character.name }}</h3>
            <p>{{ character.status }}</p>
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