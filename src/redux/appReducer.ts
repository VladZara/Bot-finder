import { Action } from "./actions/actions"
import { ActionType } from "./actions/actionTypes"



const initialState = {
    show: false
}

export const appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SHOW_POPUP: 
            return {...state, show: true}
        case ActionType.HIDE_POPUP:
                return {...state, show: false}
        default: return state
    }
}