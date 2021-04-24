import { GANTI_LIST } from './actionTypes'
export const gantiList = (list, type) => (
    {
        type: type,
        data: list
    }
)