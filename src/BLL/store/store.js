import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk"
import {throttle} from "lodash";
import {saveState} from "../localStorage";

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

store.subscribe(throttle(() => {
    saveState(
        'cart',
        store.getState().cart
    );
}, 1000));