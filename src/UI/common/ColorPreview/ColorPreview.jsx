import React from 'react';
import s from './colorPreview.module.css'

export const ColorPreview = React.memo(({color, colorId, chooseColor, isChosen, setSelectedSize}) => {

    const finalClassName = s.circle
        + (color === "черный" ? " " + s.black : "")
        + (color === "серый" ? " " + s.grey : "")
        + (color === "синий" ? " " + s.blue : "")
        + (color === "белый" ? " " + s.white : "")
        + (color === "желтый" ? " " + s.yellow : "")
        + (isChosen ? " " + s.active : "")

    const onClickHandler = () => {
        if (isChosen) return
        chooseColor(colorId)
        setSelectedSize(0)
    }

    return (
        <div className={finalClassName}
             onClick={onClickHandler}>
        </div>
    );
});