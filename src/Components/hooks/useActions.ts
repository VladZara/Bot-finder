import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from "../../redux/store/actionCreators/real"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}