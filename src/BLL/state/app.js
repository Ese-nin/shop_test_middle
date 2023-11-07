import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'app',
    initialState: {
        appStatus: 'idle',
        appError: null
    },
    reducers: {
        changeAppStatus(state, action) {
            state.appStatus = action.payload
        },
        changeAppError(state, action) {
            state.appError = action.payload
        }
    }
})


export const appReducer = slice.reducer
export const {changeAppStatus, changeAppError} = slice.actions