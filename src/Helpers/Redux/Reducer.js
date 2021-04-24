import { Listing } from "../../Utils/DummyData";
import { GANTI_LITS } from "./actionTypes";

const initialState = {
    list: Listing
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case GANTI_LITS: {
            return {
                ...state,
                list: action.data
            }
        }
        default:
            return state
            break;
    }
}