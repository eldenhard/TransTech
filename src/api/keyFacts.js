import {api} from '@/helpers/axios'

export const resource = 'wagon-park'

const getKeyFacts = () => {
    return api.get(`${resource}/key-facts/`)
}

export default {
    getKeyFacts
}