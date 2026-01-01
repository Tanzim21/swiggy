import {createSlice} from "@reduxjs/toolkit"

// example:
// {
//     id: 124,
//     name: "Wednesday Chicken Bucket",
//     
//    quantity: 2
// }

// [{id:123,name:"Tandoori paneer", quanity:3},{id:124,name:"Tandoori chicken", quanity:2},{id:125,name:"pizza", quanity:3}]



const cart = createSlice({
    name : 'cartslice',
    initialState : {
        items:[],
        count : 0,
                                                 //J0 ORDER KRA HaI VOH PURA OBJECT STORE HO JYEGA
    },

    reducers :{
        addItems : (state,action)=>{
            state.items.push({...action.payload,quantity:1});
            state.count++;

        },

        IncrementItems : (state,action)=>{     //ACTION MTLB jO ARGUMENT AA RHA HAI JAISE KI RESTDATA
           const element =  state.items.find(item=> item.id===action.payload.id); 
         element.quantity+=1;
         state.count++;
            
        },

        DecrementItems : (state,action)=>{

            const element =  state.items.find(item=> item.id===action.payload.id);
        if(element.quantity>1){
            element.quantity-=1;
        }
        else{
            state.items = state.items.filter(item=> item.id!=action.payload.id);
        }
        state.count--;
            
        }
    }





})




const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    list: [],
    banners: []
  },
  reducers: {
    addRestaurantData: (state, action) => {
      state.list = action.payload.restaurants;
      state.banners = action.payload.banners;
    }
  }
});

const restaurantSlice1 = createSlice({
  name: "restaurant1",
  initialState: {
    list: [],
    banners: [],
    menus: {}   // 👈 MENU CACHE BY ID
  },

  reducers: {
    addRestaurantData1: (state, action) => {
      state.list = action.payload.restaurants;
      state.banners = action.payload.banners;
    },

    addRestaurantMenu: (state, action) => {
      const { id, menu } = action.payload;
      state.menus[id] = menu; // 👈 cache by restaurantId
    }
  }
});


const restaurantSlice2 = createSlice({
  name: "restaurant2",
  initialState: {
    list: [],
    banners: [],
    menus: {},
    searchData: []   // 👈 SEARCH CACHE
  },

  reducers: {
    addRestaurantData2: (state, action) => {
      state.list = action.payload.restaurants;
      state.banners = action.payload.banners;
    },

    addRestaurantMenu2: (state, action) => {
      const { id, menu } = action.payload;
      state.menus[id] = menu;
    },

    addSearchData: (state, action) => {
      state.searchData = action.payload;
    }
  }
});





export const { addRestaurantData } = restaurantSlice.actions;
export const { addRestaurantData1,addRestaurantMenu } = restaurantSlice1.actions;
export const {addRestaurantData2,addRestaurantMenu2,addSearchData} = restaurantSlice.actions;




export const{addItems , IncrementItems , DecrementItems}=cart.actions;

export const cartReducer = cart.reducer;
export const restaurantReducer = restaurantSlice.reducer;
export const restaurantReducer1 = restaurantSlice1.reducer;
export const restaurantReducer2 = restaurantSlice2.reducer;



