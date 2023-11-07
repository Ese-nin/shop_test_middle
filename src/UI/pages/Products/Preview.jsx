import React from 'react';
import s from './products.module.css'
import shirtPreview1 from "../../../assets/images/1/black_front.png"
import shirtPreview2 from "../../../assets/images/2/black_front.png"
import {useNavigate} from "react-router-dom";
import {Path} from "../../../BLL";

export const Preview = ({product}) => {

    const navigate = useNavigate()

    const name = "Футболка"

    const photo = product.name === name ? shirtPreview1 : shirtPreview2
    const minPrice = Math.min(...product.colors.map(c => c.price))

    const toProduct = () => {
        navigate(Path.PRODUCT + `?id=${product.id}`)
    }

    return (
        <div className={s.preview}>
            <img className={s.previewIMG} onClick={toProduct} src={photo} alt="shirt"/>

            <h3 className={s.name} onClick={toProduct}>{product.name}</h3>
            <p>Цена: от ${minPrice}</p>

        </div>
    );
};