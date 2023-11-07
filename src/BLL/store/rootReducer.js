import {appReducer} from "../state/app";
import {productsReducer} from "../state/products";
import {cartReducer} from "../state/cart";

export const rootReducer = {
    app: appReducer,
    products: productsReducer,
    cart: cartReducer,
}