import React from 'react';
import s from "./size.module.css";

export const Size = ({size, selectedSize, setSelectedSize, existedSizes}) => {

    const activeSize = existedSizes.includes(size.id)

    const finalClassName = s.size
        + (activeSize ? ' ' + s.activeSize : '')
        + (size.id === selectedSize ? ' ' + s.selectedSize : '')

    const onClickHandler = () => {
        if (activeSize) {
            setSelectedSize(size.id)
        }
    }

    return (
        <span className={finalClassName}
              onClick={onClickHandler}>
            {size.label}
        </span>
    )
};