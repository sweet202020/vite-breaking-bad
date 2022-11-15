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
        <select @change="$emit('changeOptions')" v-model="store.selectText" class=" form-select-lg" id="">
            <option value="">All Characters</option>
            <option value="Breaking+Bad">Breaking Bad</option>
            <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
select {
    width: 300px;
    margin-top: 1rem;
}
</style>