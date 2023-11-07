import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import s from "../products.module.css"
import {fetchProductById, fetchProductColor} from "../../../../BLL";
import {useDispatch, useSelector} from "react-redux";
import {colorSelector, productSelector} from "../../../../BLL";
import {Description} from "./Description";
import {Button} from "../../../common";

export const Product = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    const item = useSelector(productSelector)
    const colorItem = useSelector(colorSelector)

    const [index, setIndex] = useState(0)

    useEffect(() => {
        dispatch(fetchProductById({id: +id}))
        dispatch(fetchProductColor({prodId: +id}))
    }, [id, dispatch])

    const chooseColor = useCallback((colorId) => {
        dispatch(fetchProductColor({prodId: +id, colorId}))
    }, [id, dispatch])

    if (!item || !colorItem) {
        return null
    }

    const changeImage = () => {
        if (index < colorItem.images.length - 1) {
            setIndex(prev => prev + 1)
        } else {
            setIndex(0)
        }
    }

    const backToList = () => {
        navigate(-1)
    }

    return (
        <div className={s.product}>
            <Button title={'Назад'} callBack={backToList}/>
            <img onClick={changeImage} className={s.productIMG} src={colorItem.images[index]} alt="Product"/>
            <Description name={item.name}
                         color={colorItem.name}
                         colors={item.colors}
                         price={colorItem.price}
                         description={colorItem.description}
                         chooseColor={chooseColor}
                         chosenColorId={colorItem.id}/>
        </div>
    );
};