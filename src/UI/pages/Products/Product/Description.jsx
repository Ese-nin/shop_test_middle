import React, {useState} from 'react';
import s from "../products.module.css";
import {Button, ColorPreview} from "../../../common";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart, sizesSelector} from "../../../../BLL";
import {Size} from "../Size/Size";

export const Description = React.memo(({name, colors, color, price, description, chooseColor, chosenColorId}) => {

    const dispatch = useDispatch()
    const sizes = useSelector(sizesSelector)

    const [selectedSize, setSelectedSize] = useState(0)

    const colorsBlock = colors.map(c => {
        return <ColorPreview key={c.id} color={c.name} colorId={c.id}
                             chooseColor={chooseColor}
                             isChosen={c.id === chosenColorId}
                             setSelectedSize={setSelectedSize}/>
    })

    const chosenColor = colors.find(c => c.id === chosenColorId)
    const existedSizes = chosenColor.sizes

    const sizesBlock = sizes.map(size => <Size key={size.id}
                                               size={size}
                                               existedSizes={existedSizes}
                                               selectedSize={selectedSize}
                                               setSelectedSize={setSelectedSize}/>)

    const sendToCart = () => {
        if (selectedSize) {
            dispatch(addProductToCart({sizeId: selectedSize, colorId: chosenColorId}))
        } else {
            alert('Выберите размер')
        }
    }

    return (
        <div className={s.description}>
            <h3>{name}</h3>
            <p>Цвет: {color}</p>
            <div className={s.colorsBlock}>{colorsBlock}</div>
            <div className={s.sizesBlock}>
                Размеры: {sizesBlock}
            </div>
            <p>Цена: ${price}</p>
            <h4>Описание:</h4>
            <p>{description}</p>
            <Button title={'Добавить в корзину'} callBack={sendToCart}/>
        </div>
    );
});