import React from 'react';
import s from "./shopCart.module.css"
import {cartSelector} from "../../../BLL";
import {useDispatch, useSelector} from "react-redux";
import {CartItem} from "./CartItem";
import {Button} from "../../common";
import {resetCart} from "../../../BLL";
import {Path} from "../../../BLL";
import {useNavigate} from "react-router-dom";

export const ShopCart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(cartSelector)
    const navigate = useNavigate()

    const itemsList = cart.length ? cart.map(i => <CartItem key={i.id} item={i}/>) : <span>Корзина пуста</span>

    const finalCartPrice = cart.length
        ? cart.reduce((acc, c) => {
            return acc + +c.price
        }, 0)
        : null

    const placeOrder = () => {
        navigate(Path.ORDER)
        dispatch(resetCart())
    }

    const backToList = () => {
        navigate(Path.LIST)
    }

    return (
        <div className={s.wrapper}>
            <Button title={'На главную'} callBack={backToList}/>
            {itemsList}
            {!!cart.length &&
                <div>
                    <h3>Итого: </h3>
                    <span>${finalCartPrice}</span>
                </div>}
            {!!cart.length && <Button title={'Оформить заказ'} callBack={placeOrder}/>}
        </div>
    );
};