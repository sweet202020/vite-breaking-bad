<script>
import CharacterItem from './CharacterItem.vue';
import { store } from '../store.js'
import axios from 'axios';
import SelectBox from "./SelectBox.vue";
export default {
    name: 'CharacterList',
    components: {
        CharacterItem,
        SelectBox
    },
    data() {
        return {
            store,
            selectText: ""
        }
    }, methods: {
        changeSelect() {
            /* console.log('ciao');
            console.log(this.store.selectText); */

            const selectText = this.store.selectText
            const url = `${this.store.API_URL}?category=${this.store.selectText}`
            console.log(url);
            axios.get(url)
                .then(resp => {
                    /* console.log(resp); */
                    this.store.characters = resp.data
                })
        }
    }, computed: {
        NumberCharacters() {
            return this.store.characters.length
        }
    }
}
</script>


<template>
    <div class="container">

        <SelectBox @changeOptions="changeSelect" />

        <h3>Ci sono {{ NumberCharacters }} personaggi</h3>
        <h3 class="loading" v-if="!store.loading">Loading..</h3>


        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
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