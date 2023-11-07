import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadState} from "../localStorage";

const initialState = loadState('cart')
    ? loadState('cart')
    : []

export const addProductToCart = createAsyncThunk('cart/addProduct', ({colorId, sizeId}, {getState}) => {
    const {name, colors} = getState().products.product
    const color = colors.find(c => c.id === colorId)
    const id = Math.floor(Math.random() * 1000000) + 1
    return {
        item: {
            name,
            id,
            color: color.name,
            price: color.price,
            sizeId: sizeId,
            image: color.images[0]
        }
    }
})

const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        removeFromCart(state, action) {
            const index = state.findIndex(p => p.id === action.payload.id)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        resetCart() {
            return []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            state.push(action.payload.item)
        })
    }
})


export const cartReducer = slice.reducer
export const {removeFromCart, resetCart} = slice.actions