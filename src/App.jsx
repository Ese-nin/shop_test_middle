import React, {useEffect} from 'react'
import {Header} from "./UI/Header/Header";
import {Footer} from "./UI/Footer/Footer";
import {Main} from "./UI/Main/Main";
import {fetchProducts, fetchSizes} from "./BLL";
import {useDispatch} from "react-redux";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchSizes())
    }, [dispatch])

    return (
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};