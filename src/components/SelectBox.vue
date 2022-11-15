<script>
import { store } from '../store.js'
export default {
    name: 'SelectBox',
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="mb-3">
        <label for="">Choose The Tv-Show Characters</label>
        <select @change="$emit('changeOptions')" v-model="store.selectText" class="form-select form-select-lg" id="">
            <option disabled value="">All Characters</option>
            <option value="Breaking+Bad">Breaking Bad</option>
            <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
    </div>
</template>