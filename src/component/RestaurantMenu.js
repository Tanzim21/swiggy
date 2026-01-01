 
// export default function RestaurantMenu(){

//     let {id} = useParams();

//     const [RestData, setRestData] = useState([]);
    
//     useEffect(()=>{
//         async function fetchData()
//     {
//         // HUM DIRECTLY DATA KO FETCH NHI KR SKTE ISILIYE HUM PROXY SERVER KI HELP LETE HAI ,KYUNKI DONO KA ORIGIN MATCH NHI HOTA 
//         const proxyServer = "https://cors-anywhere.herokuapp.com/"
//         const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//         //https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
//         const response =  await fetch(proxyServer+swiggyAPI)
//         const data = await response.json();
//         const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//         const filterData = tempData.filter((items)=>'title'in items?.card?.card)
//          setRestData(filterData);
            
    
    
//     }
    
//     fetchData();
    
//     },[])

//     console.log(RestData);

//     return(
          
//         <div className="w-[80%] mx-auto mt-20">
      
//                   {
                    
//                     RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
//                   }
//                 </div>

//     )
// }


// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router";
// import MenuCard from "./MenuCard"
// import Shimmer from "./Shimmer";


// export default function RestaurantMenu(){
   
//     let {id} = useParams();
//     console.log(id);

//     const [RestData, setRestData] = useState([]);
//     const [selected, setselected] = useState(null);


//     useEffect(()=>{
    
//         async function fetchData() {
           
//            const proxyServer = "https://cors-anywhere.herokuapp.com/"
//            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//            const response = await fetch(proxyServer+swiggyAPI);
//            const data = await response.json();
//            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//            const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
//            setRestData(filterData);
//         }
   
//         fetchData();
//        },[])

import { useParams } from "react-router";
import MenuCard from "./MenuCard";
//import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { addRestaurantMenu } from "../Stored/CartSlicer";
//import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


export default function RestaurantMenu() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedMenu = useSelector(
    (state) => state.restaurant1.menus[id]
  );

  const [selected, setselected] = useState(null);

  useEffect(() => {
    if (selectedMenu) return; // ✅ already cached

    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );

      dispatch(
        addRestaurantMenu({
          id,
          menu: filterData
        })
      );
    }

    fetchData();
  }, [id]);


       //console.log(RestData);


      //  if(RestData.length==0)
      //    {
      //      return(
      //          <Shimmer></Shimmer>
      //      )
       
      //    }
        if (!selectedMenu) {
    return <Shimmer />;
  }

           

    return(
      <div>
          <div className="w-[80%] mt-20 mb-20 mx-auto">
            <Link to={`/city/delhi/${id}/search`}>
            <button className="w-full text-2xl border bg-gray-200 text-center py-4 rounded-4xl">Search for dishes</button>
            </Link>
          </div>
          
            <div className="w-[80%] mt-20 mb-20 mx-auto">
            <button className={`text-2xl py-2 px-8 border rounded-2xl mr-2 ${selected==="veg"?"bg-green-400":"bg-gray-300"}`} onClick={()=>setselected(selected==="veg"?null:"veg")}>Veg</button>
            <button className={`text-2xl py-2 px-8 border rounded-2xl mr-2 ${selected==="nonveg"?"bg-red-400":"bg-gray-300"}`} onClick={()=>setselected(selected==="nonveg"?null:"nonveg")}>Non Veg</button>
            </div>
        <div className="w-[80%] mx-auto mt-20">
          {
            selectedMenu.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
          }
        </div>
        </div>
    )

}