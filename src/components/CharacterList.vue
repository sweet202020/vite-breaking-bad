<script>
import CharacterItem from './CharacterItem.vue';
import { store } from '../store.js'
export default {
    name: 'CharacterList',
    components: {
        CharacterItem
    },
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            <CharacterItem :character="character" v-for="character in store.characters" />
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>