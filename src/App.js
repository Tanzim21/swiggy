import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
import Shimmer from "./component/Shimmer";
import SearchFood from "./component/SearchFood";
import SecondaryHome from "./component/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from "./component/Checkout";
import SearchData from "./component/SearchData";




function App(){
    
    return(
    <>
    <Provider store = {store}>
       
       <BrowserRouter>
       <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        <Route path="/SearchData" element={<SearchData></SearchData>}></Route>

        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
       {/* // <Route path="/SearchData" element={<SearchData></SearchData>}></Route> */}
       </Routes>
       </BrowserRouter>
    </Provider> 
    </>
           )
       }
       
       ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);