import React from 'react';

export const Button = ({title, callBack}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};