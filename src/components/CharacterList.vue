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
        <h3 v-show="store.characters.length === 62">Ci sono {{ store.characters.length }} personaggi</h3>
        <h3 class="loading" v-show="store.characters.length < 62">Loading..</h3>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            <CharacterItem :character="character" v-for="character in store.characters" />


        </div>
    </div>
</template>


<style lang="scss" scoped>
.loading {
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    margin-top: 5rem;

}
</style>