import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProduct, getProductColor, getProducts, getSizes} from "../../services/api";
import {changeAppStatus} from "./app";
import {errorsHandler} from "../../utils/errorsHandler";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (param, {dispatch, rejectWithValue}) => {
    dispatch(changeAppStatus("loading"))
    try {
        const data = await getProducts()
        dispatch(changeAppStatus("idle"))
        return {products: data}
    } catch (err) {
        errorsHandler(dispatch, rejectWithValue, err)
    }
})

export const fetchProductById = createAsyncThunk('products/fetchById', async ({id}, {dispatch, rejectWithValue}) => {
    dispatch(changeAppStatus("loading"))
    try {
        const data = await getProduct(id)
        dispatch(changeAppStatus("idle"))
        return {product: data}
    } catch (err) {
        errorsHandler(dispatch, rejectWithValue, err)
    }
})

export const fetchSizes = createAsyncThunk('products/sizes', async (param, {dispatch, rejectWithValue}) => {
    dispatch(changeAppStatus('loading'))
    try {
        const data = await getSizes()
        dispatch(changeAppStatus('idle'))
        return {sizes: data}
    } catch (err) {
        errorsHandler(dispatch, rejectWithValue, err)
    }
})

export const fetchProductColor = createAsyncThunk('products/color', async ({prodId = 1, colorId = 1}, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(changeAppStatus('loading'))
    try {
        const data = await getProductColor(prodId, colorId)
        dispatch(changeAppStatus('idle'))
        return {color: data}
    } catch (err) {
        errorsHandler(dispatch, rejectWithValue, err)
    }
})

const slice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        product: null,
        colorItem: null,
        sizes: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.list = action.payload.products
        }).addCase(fetchProductById.fulfilled, (state, action) => {
            state.product = action.payload.product
        }).addCase(fetchSizes.fulfilled, (state, action) => {
            state.sizes = action.payload.sizes
        }).addCase(fetchProductColor.fulfilled, (state, action) => {
            state.colorItem = action.payload.color
        })
    }

})


export const productsReducer = slice.reducer