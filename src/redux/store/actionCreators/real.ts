import {UserAction, UserActionTypes} from "../../types/todo";
import {Dispatch} from "redux";


export const fetchReal = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
                const response = await fetch("http://localhost:3000/api/v1/image")
                const blob = await response.blob()
                const imgURL = URL.createObjectURL(blob)
                dispatch({type: UserActionTypes.FETCH_REAL_SUCCESS, payload: imgURL })
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_REAL_ERROR, payload: "Ii erroare boule uitate inca odata in cod"})
        }
    }
}