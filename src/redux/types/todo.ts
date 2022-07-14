export interface UserState {
    real: [],
    error: null | string
    loading: boolean
}
export enum UserActionTypes {
    FETCH_REAL = "FETCH_REAL",
    FETCH_REAL_SUCCESS = "FETCH_REAL",
    FETCH_REAL_ERROR = "FETCH_REAL_FETCH_REAL_ERROR"
}

export interface FetchRealSuccessAction {
    type: UserActionTypes.FETCH_REAL_SUCCESS;
    payload: any
}
export interface FetchRealErrorAction {
    type: UserActionTypes.FETCH_REAL_ERROR;
    payload: string
}


export type UserAction = FetchRealSuccessAction | FetchRealErrorAction