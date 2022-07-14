import { UserAction, UserActionTypes, UserState} from "../../types/todo";
const initialState: UserState = {
    real: [],
    error: null,
    loading: false
}
export const realReducer = (state = initialState, action: UserAction)  => {
    switch (action.type) {
        case UserActionTypes.FETCH_REAL_SUCCESS:
            return {...state, real: state.real.concat(action.payload),  error: null, loading: false}
        case UserActionTypes.FETCH_REAL_ERROR:
            return {real: [], error: action.payload, loading: false}
        default:
            return state
    }
}