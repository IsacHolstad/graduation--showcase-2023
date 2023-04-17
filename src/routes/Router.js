import React from 'react';
import { Routes, Route} from "react-router-dom";
import FormPage from '../pages/FormPage';
import HomePage from '../pages/Homepage';


const Router = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<HomePage/>}/>
                <Route path="/form"  element={<FormPage/>}/>
            </Routes>
        </>
    );
}

export default Router;