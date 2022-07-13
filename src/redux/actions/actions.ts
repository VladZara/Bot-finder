import { ActionType } from "./actionTypes"

interface GetPersonAction {
    type: ActionType.GET_PERSON,
    payload: number
}

interface FakePersonAction {
    type: ActionType.FAKE_PERSONS,
    payload: []
}

interface AddReasonsAction {
    type: ActionType.ADD_REASONS,
    payload: string
}

interface ShowPopup {
    type: ActionType.SHOW_POPUP,
    payload: boolean
}

interface HidePopup {
    type: ActionType.HIDE_POPUP,
    payload: boolean
}
 
export type Action = GetPersonAction | FakePersonAction | AddReasonsAction | ShowPopup | HidePopup


