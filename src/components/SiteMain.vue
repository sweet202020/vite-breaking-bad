<script>
import CharacterList from './CharacterList.vue';
export default {
    name: 'SiteMain',
    props: {
        characters: Object,
    },
    components: {
        CharacterList,

    }
}
</script>


<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
            <CharacterList :characters="characters" />

        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>