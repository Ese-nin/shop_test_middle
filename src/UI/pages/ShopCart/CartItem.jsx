import React from 'react';
import s from "./shopCart.module.css"
import {useDispatch, useSelector} from "react-redux";
import {sizesSelector} from "../../../BLL";
import {Button} from "../../common";
import {removeFromCart} from "../../../BLL";

export const CartItem = ({item}) => {

    const dispatch = useDispatch()

    const sizes = useSelector(sizesSelector)
    const size = sizes.find(s => s.id === item.sizeId)

    const removeItem = () => {
        dispatch(removeFromCart({id: item.id}))
    }

    if (!sizes.length) {
        return
    }

    return (
        <div className={s.itemsList}>
            <img className={s.image} src={item.image} alt="preview"/>
            <div className={s.shortDescription}>
                <h4>{item.name}</h4>
                <span>Цвет: {item.color}</span>
                <span>Размер: {size.label}</span>
                <span>Цена: ${item.price}</span>
            </div>
            <Button title={"Удалить из корзины"} callBack={removeItem}/>
        </div>
    );
};