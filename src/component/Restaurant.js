 

 

// export default function Restaurant(){

// const [RestData, setRestData] = useState([]);

// useEffect(()=>{
//     async function fetchData()
// {
//     // HUM DIRECTLY DATA KO FETCH NHI KR SKTE ISILIYE HUM PROXY SERVER KI HELP LETE HAI ,KYUNKI DONO KA ORIGIN MATCH NHI HOTA 
//     const proxyServer = "https://cors-anywhere.herokuapp.com/"
//     const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
//     const response =  await fetch(proxyServer+swiggyAPI)
//     const data = await response.json();
//      setRestData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        


// }

// fetchData();

// },[])
//   //console.log(RestData)
//   if(RestData.length===0)
//   {
//     return(
//         <Shimmer></Shimmer>
//     )

//   }
    
// return(
//     <>
//     {/* <div className="flex justify-center items-center mt-8">
//         <h1 className="text-5xl font-bold">Top restaurant chains in Delhi</h1>
//     </div> */}
//      <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
                
//                 {
//                     RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
//                 }
    
//             </div> 
//     </>
// )
// }
 

// import { useEffect, useState } from "react";
// import RestCard from "./RestCard";
// import Shimmer from "./Shimmer";
// import Topinfo from "./Topinfo";

// export default function Restaurant(){

// const [RestData, setRestData] = useState([]);
// const [RestData1,setRestData1] = useState([])

// useEffect(()=>{
//     async function fetchData()
// {
//     // HUM DIRECTLY DATA KO FETCH NHI KR SKTE ISILIYE HUM PROXY SERVER KI HELP LETE HAI ,KYUNKI DONO KA ORIGIN MATCH NHI HOTA 
//     const proxyServer = "https://cors-anywhere.herokuapp.com/"
//     const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
//     const response =  await fetch(proxyServer+swiggyAPI)
//     const data = await response.json();
//     setRestData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setRestData1(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)        


// }

// fetchData();

// },[])
//   //console.log(RestData)
//   if(RestData.length===0)
//   {
//     return(
//         <Shimmer></Shimmer>
//     )

//   }
    
// return(
//     <>
//     {/* <div className="flex justify-center items-center mt-8">
//         <h1 className="text-5xl font-bold">Top restaurant chains in Delhi</h1>
//     </div> */}
//     <div className="max-w-[80%]  container mx-auto overflow-x-auto flex gap-4  py-2 px-1 whitespace-nowrap mt-7">
//         {
//             RestData1.map((items)=><Topinfo key={items?.id} items={items}></Topinfo>)
//         }

//     </div>
//      <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
                
//                 {
//                     RestData.map((restInfo)=><RestCard key={restInfo?.info.id} restInfo={restInfo}></RestCard>)
//                 }
    
//             </div> 
//     </>
// )
// }

import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import Topinfo from "./Topinfo";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantData } from "../Stored/CartSlicer";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Restaurant() {

  const dispatch = useDispatch();

  const RestData = useSelector(
    (state) => state.restaurant.list
  );

  const RestData1 = useSelector(
    (state) => state.restaurant.banners
  );

  useEffect(() => {
    if (RestData.length > 0) return; // ✅ already fetched

    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      dispatch(
        addRestaurantData({
          restaurants:
            data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants || [],
          banners:
            data.data?.cards[0]?.card?.card?.imageGridCards?.info || []
        })
      );
    }

    fetchData();
  }, []);

  if (RestData.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="max-w-[80%] container mx-auto overflow-x-auto flex gap-4 py-2 px-1 whitespace-nowrap mt-7">
        {RestData1.map((items) => (
          <Topinfo key={items?.id} items={items} />
        ))}
      </div>

      <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
        {RestData.map((restInfo) => (
          <RestCard key={restInfo?.info.id} restInfo={restInfo} />
        ))}
      </div>
    </>
  );
}
