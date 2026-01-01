import { useEffect, useState } from "react";
import Search from "./Search";


// export default function SearchData(){

//     const [RestData,setRestData] = useState([]);

//     useEffect(()=>{
        
//             async function fetchData() {
               
//                const proxyServer = "https://cors-anywhere.herokuapp.com/"
//                const swiggyAPI = "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=30.91460&lng=75.85430"
//                const response = await fetch(proxyServer+swiggyAPI);
//                const data = await response.json();
               
               
//                setRestData(data?.data?.cards[1]?.card?.card?.imageGridCards?.info);
//             }
       
//             fetchData();
//            },[])

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchData } from "../Stored/CartSlicer";
import Search from "./Search";

export default function SearchData() {

  const dispatch = useDispatch();

  const RestData = useSelector(
    (state) => state.restaurant.searchData
  );

  useEffect(() => {
    if (RestData.length > 0) return; // ✅ already fetched

    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=30.91460&lng=75.85430";

      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      dispatch(
        addSearchData(
          data?.data?.cards[1]?.card?.card?.imageGridCards?.info || []
        )
      );
    }

    fetchData();
  }, []);


           console.log(RestData);
    
    return(
        <>
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-50 rounded-2xl border"  placeholder="Search for restaurant and food"></input>
        </div>
         <div className="flex max-w-[80%] container mx-auto mt-5">
          {
            RestData.map((restInfo)=><Search key={restInfo?.id} restInfo={restInfo}></Search>)
            
          }
        </div>
        </>
    )
}