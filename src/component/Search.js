

export default function Search({restInfo}){
    console.log(restInfo?.imageId)
    return(
        <div className="w-full overflow-x-auto flex gap-4  py-2 px-1 whitespace-nowrap">
        
            <img 
               className="w-16 h-16 rounded object-cover"  
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo?.imageId
          }
          alt={restInfo?.id}
        />
        </div>
        
        
    )
}