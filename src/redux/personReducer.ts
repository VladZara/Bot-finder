import { Action } from "./actions/actions"
import { ActionType} from "./actions/actionTypes"


// const initialState = {
//    allPersons: [],
//     fakePerson: [{
//         background: "",
//         eyes: false,
//         hair: false,
//         ears: false,
//         nose: false,
//         mouth: false,
//         jewellery: false,
//         additionalReason: ""
//     }],
//     fakePersons: [],
//     realPersons: []
// }
const initialState = {
    background: [],
    eyes: [],
    hair: [],
    ears: [],
    nose: [],
    mouth: [],
    jewellery: [],
    additionalReason: []
}



export const personsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FAKE_PERSONS:
            return {...state, background: state.background.concat(action.payload)}
        default: return state
    }
}