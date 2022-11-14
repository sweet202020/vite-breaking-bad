<script>
export default {
    name: 'CharacterItem',
    props: {
        character: Object,
    }
}
</script>

<template>
    <div class="my_card">
        <div class="col text-white text-center">
            <img :src="character.img" alt="">
            <h3>{{ character.name }}</h3>
            <div>Breaking bad</div>
            <p>{{ character.status }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 240px;
    aspect-ratio: 1/1;
    object-fit: contain;
    padding-top: 1rem;
}

.my_card {
    background-color: #2E3A46;
    border: 8px solid white;
}
</style>