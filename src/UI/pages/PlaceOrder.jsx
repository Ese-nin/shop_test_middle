import React from 'react';
import {useNavigate} from "react-router-dom";
import {Path} from "../../BLL";
import {Button} from "../common";

export const PlaceOrder = () => {

    const navigate = useNavigate()

    const toMainPage = () => {
        navigate(Path.LIST)
    }

    return (
        <div>
            <Button title={'На главную'} callBack={toMainPage}/>
            <h1>Страница для оформления заказа</h1>
        </div>

    )
};
