import {
    reactive
} from 'vue'

export const store = reactive({
    characters: [],
    error: null,
    API_URL: 'https://www.breakingbadapi.com/api/characters',
})