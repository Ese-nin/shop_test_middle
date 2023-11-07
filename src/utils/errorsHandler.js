import {changeAppError} from "../BLL";

export const errorsHandler = (dispatch, rejectWithValue, error) => {
    dispatch(changeAppError("Some error occurred"))
    return rejectWithValue(error)
}