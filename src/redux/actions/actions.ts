import { ActionType } from "./actionTypes"

interface GetPersonAction {
    type: ActionType.GET_PERSON,
    payload: []
}

interface FakePersonAction {
    type: ActionType.FAKE_PERSONS,
    payload: []
}

interface ShowPopup {
    type: ActionType.SHOW_POPUP,
    payload: boolean
}

interface HidePopup {
    type: ActionType.HIDE_POPUP,
    payload: boolean
}
 
export type Action = GetPersonAction | FakePersonAction | ShowPopup | HidePopup


