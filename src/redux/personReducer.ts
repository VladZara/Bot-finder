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
    allPersons: [],
    fakePersons: {
        background: [],
        eyes: [],
        hair: [],
        ears: [],
        nose: [],
        mouth: [],
        jewellery: [],
        additionalReason: []
    }
}



export const personsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_PERSON:
            return {...state, allPersons: state.allPersons.concat(action.payload)}
        case ActionType.FAKE_PERSONS:
            return {...state, fakePersons: state.fakePersons.background.concat(action.payload)}
        default: return state
    }
}