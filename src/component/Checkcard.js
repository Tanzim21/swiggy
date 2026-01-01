

export default function Checkcard({value}){
    console.log(value)

    return(
        <>
        
        
        <div className="flex  ">

            <div className="ml-1 h-8 " >{value.name}</div>
            <div className="ml-16 h-8 ">{value.price}</div>
        </div>


        
        </>
    )
}
