

export default function Topinfo({items}){
    return(
        
            <>
        
            <img 
               className="w-40 h-50 object-cover"  
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            items?.imageId
          }
          alt={items?.id}
        />
        </>
        
 
    )
}