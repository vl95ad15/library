import { IS_LOGGED, LOG_OUT } from "./types";

export default function Reducer(state, action) {
    switch (action.type) {
        case IS_LOGGED:
            return {
                ...state,
                isLogged: true,
                userName: action.payload.userName,
            }
        case LOG_OUT:
            return {
                ...state, isLogged: false
            }
        default:
            return state
    }
}
