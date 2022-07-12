import { HIDE_POPUP, SHOW_POPUP } from "./types"

const initialState = {
    show: true
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POPUP: 
            return {...state, show: true}
        case HIDE_POPUP:
                return {...state, show: false}
        default: return state
    }
}