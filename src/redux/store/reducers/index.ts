import {combineReducers} from "redux";
import {realReducer} from "./realReducer";



export const rootReducer = combineReducers({
real: realReducer,
})

export type RootState = ReturnType<typeof rootReducer>