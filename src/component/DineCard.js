

export default function DineCard({RestData}){

    return(
      //       <div className="max-w-sm flex-none">
      //  <a target="_blank" href={RestData.cta.link}>
      //   <div className="relative">
      //     <img
      //       className="w-80 h-50 object-cover"
      //       src={
      //         "https://media-assets.swiggy.com/swiggy/image/upload/" +
      //         RestData?.info?.mediaFiles[0]?.url
      //       }
      //       alt="Restaurant"
      //     />
      //     {/* Gradient overlay behind the text */}
      //    {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div> */}
      //     {/* Text with higher z-index */}
      //     <p className="absolute bottom-2 left-2 text-xl text-white z-10">
      //       {RestData.info.name}
      //     </p>
      //     <p className="absolute bottom-2 right-2 text-xl text-white z-10">
      //       {RestData?.info?.rating?.value}
      //     </p>
      //   </div>
        
      //   <div className="relative bg-white">
             
      //     <p className="absolute top-2 left-2 text-gray-400">{RestData?.info?.cuisines.join(", ")}</p>

      //     <p className="absolute top-2 right-2 text-gray-400">{RestData?.info?.costForTwo}</p>
        
      //   </div>

       

      //   <div className="relative bg-white ">
             
      //     <p className="absolute top-8 left-2 text-gray-400">{RestData?.info?.locality}</p>

      //     <p className="absolute top-8 right-2 text-gray-400">{RestData?.info?.locationInfo?.distanceString}</p>
        
      //   </div> 

      //     <div className="relative bg-green-500  ">
             
      //     <p className="absolute top-14 left-2 text-gray-400">{RestData?.info?.offerInfoV3?.vendorOffer?.title}</p>

      //     <p className="absolute top-14 right-2 text-gray-400">{RestData?.info?.offerInfoV3?.vendorOffer?.subtext}</p>
        
      //   </div>  

       


      //   </a>
      // </div> 
            
  <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden flex-none ">
    <a target="_blank" href={RestData?.cta?.link} rel="noopener noreferrer">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            RestData?.info?.mediaFiles[0]?.url
          }
          alt={RestData?.info?.name}
        />
        {/* Restaurant Name & Rating */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 flex justify-between items-end">
          <h2 className="text-white text-lg font-semibold">
            {RestData?.info?.name}
          </h2>
          <p className="text-white bg-green-600 px-2 py-1 rounded-md text-sm">
            ⭐ {RestData?.info?.rating?.value}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 text-gray-700">
        <div className="flex justify-between text-sm text-gray-500">
          <p>{RestData?.info?.cuisines.join(" • ")}</p>
          <p>{RestData?.info?.costForTwo}</p>
        </div>

        <div className="flex justify-between text-sm mt-1 text-gray-500">
          <p>{RestData?.info?.locality}</p>
          <p>{RestData?.info?.locationInfo?.distanceString}</p>
        </div>
      </div>

      {/* Offer Section */}
      <div className="bg-green-500 text-white text-sm px-3 py-2 flex justify-between items-center">
        <p>{RestData?.info?.offerInfoV3?.vendorOffer?.title || "Flat 20% off"}</p>
        <p>{RestData?.info?.offerInfoV3?.vendorOffer?.subtext || "+2 more"}</p>
      </div>

      <div className="bg-green-100 text-green-700 text-sm px-3 py-2">
        Up to 10% off with bank offers
      </div>
    </a>
  </div>
);


           
           
    
}