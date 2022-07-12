import { CREATE_PERSON, HIDE_POPUP, SHOW_POPUP } from "./types"


export const showPopUp = () => {
    return {
        type: SHOW_POPUP
    }
}

export const hidePopUp = () => {
    return {
        type: HIDE_POPUP    
    }
}

    export const fetchpersons = () => {
        return async dispatch => {
            const response = await fetch("http://localhost:3000/api/v1/image")
            const blob = await response.blob()
            const imgURL = await URL.createObjectURL(imgURL)
            dispatch({type: CREATE_PERSON, payload: imgURL})
        }
    }


    export const getImage = async () => {
        return await fetch("http://localhost:3000/api/v1/image")
            .then((response) => response.blob())
            .then((imgURL) => URL.createObjectURL(imgURL))
            dispatch({type: CREATE_PERSON, payload: imgURL)
    }