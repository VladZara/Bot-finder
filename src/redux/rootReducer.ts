import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { personsReducer } from "./personReducer";


export const rootReducer = combineReducers( {
    post: personsReducer,
    app: appReducer
})

