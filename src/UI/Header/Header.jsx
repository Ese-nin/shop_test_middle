import React from 'react';
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {Path} from "../../BLL";
import {cartSelector} from "../../BLL";
import {useSelector} from "react-redux";

export const Header = () => {

    const cart = useSelector(cartSelector)
    const cartSize = cart.length ? <>({cart.length})</> : null

    return (
        <header className={s.header}>
            <h2>Логотип</h2>
            <h1>Название</h1>
            <NavLink to={Path.SHOP_CART}>{cartSize} Корзина</NavLink>
        </header>
    );
};