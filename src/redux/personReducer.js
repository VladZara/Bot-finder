import { ADD_REASONS, CREATE_PERSON, FAKE_PERSONS } from "./types"


const initialState = {
   allPersons: [],
    fakePerson: [{
        background: "",
        eyes: false,
        hair: false,
        ears: false,
        nose: false,
        mouth: false,
        jewellery: false,
        additionalReason: ""
    }],
    fakePersons: [],
    realPersons: []
}

export const personsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PERSON: 
            return {...state, allPersons: state.allPersons.concat(action.payload)}
        case FAKE_PERSONS:
            return {...state, fakePersons: state.fakePersons.concat(action.payload)}
        case ADD_REASONS:
            return {...state, fakePerson: state.additionalReason(action.payload)}
        default: return state
    }
}