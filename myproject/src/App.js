// import logo from './logo.svg';
import React from 'react';
import './App.css';
import RouteConfig from"./components/router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
    return(
        <>
           <RouteConfig />
        </>
    );
}
export default App;  