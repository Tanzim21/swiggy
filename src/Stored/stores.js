import { configureStore } from "@reduxjs/toolkit";
import {cartReducer,restaurantReducer,restaurantReducer1,restaurantReducer2 }from "./CartSlicer"


export const store = configureStore({
    reducer:{
        cartslice:cartReducer,
        restaurant: restaurantReducer,
        restaurant1:restaurantReducer1,
        restaurant2:restaurantReducer2


        
    }
})