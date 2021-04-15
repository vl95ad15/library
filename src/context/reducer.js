import { IS_LOGGED, LOG_OUT, ADD_BOOK } from "./types";

export default function Reducer(state, action) {
    switch (action.type) {
        case IS_LOGGED:
            return {
                ...state,
                isLogged: true,
                userName: action.payload.userName
            }
        case LOG_OUT:
            return {
                ...state,
                isLogged: false
            }
        case ADD_BOOK:
            return {
                ...state,
                id: action.id
            }
        default:
            return state
    }
}
