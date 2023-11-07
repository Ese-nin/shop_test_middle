import React from 'react';
import {Preview} from "./Preview";
import s from "./products.module.css"

export const ProductsList = ({products}) => {

    const ProductsList = products.map((p) => <Preview key={p.id} product={p}/>)

    return (
        <div className={s.list}>
            {ProductsList}
        </div>
    );
};