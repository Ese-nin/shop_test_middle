import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ProductsList} from "../pages/Products/ProductsList";
import {ShopCart} from "../pages/ShopCart/ShopCart";
import {Product} from "../pages/Products/Product/Product";
import {PlaceOrder} from "../pages/PlaceOrder";
import {useSelector} from "react-redux";
import {appStatusSelector, productsSelector} from "../../BLL";
import {Preloader} from "../common";
import {Path} from "../../BLL";

export const Main = () => {

    const products = useSelector(productsSelector)
    const appStatus = useSelector(appStatusSelector)

    return (
        <div>
            {appStatus === 'loading' && <Preloader/>}
            <Routes>
                <Route path="/" element={<Navigate to={Path.LIST}/>}/>
                <Route path={Path.LIST} element={<ProductsList products={products}/>}/>
                <Route path={Path.PRODUCT} element={<Product/>}/>
                <Route path={Path.SHOP_CART} element={<ShopCart/>}/>
                <Route path={Path.ORDER} element={<PlaceOrder/>}/>
                <Route path={Path["404"]} element={<h1>Page not found</h1>}/>
                <Route path="*" element={<Navigate to={Path["404"]}/>}/>
            </Routes>
        </div>
    );
};