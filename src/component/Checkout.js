import { useSelector } from "react-redux"
import  Checkcard  from "./Checkcard";


// export default function Checkout(){
//        const items =useSelector(state=>state.cartslice.items)
//        console.log(items);
//        console.log("tamzim")
//     return(
//         <>
//         {/* <div>
//             {
//             items.map(value=> < div  key={value.id} className="text-4xl"><div>{value.name}</div></div>)
//             } 
//         </div> */}
//         <div className="w-200 bg-gray-300 py-10 px-15 mt-30 ml-15 outline-black relative font-semibold ">
//             <div className="text-2xl font-bold">Account</div>
//             <div>
//                 <div className="relative">To place your order now, log in to your existing account or sign up.</div>
//                 <img className="  absolute top-16 right-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
//                 <div className="flex">
//                 <div className="mt-10 bg-white py-2 px-6  border-green-500 text-center  ">
//                     <p className="text-green-500">Have an Account?</p>
//                     <p className="text-green-500">LOG IN</p>
//                 </div>

//                 <div className="mt-10 ml-10  bg-green-500 py-2 px-6 text-center">
//                     <p className="text-white">New to Swiggy</p>
//                     <p className="text-white">SIGN UP</p>
//                 </div>
//                 </div>
//             </div>


//         </div>
//         <div className="w-200 bg-gray-300 py-10 px-15 mt-7 ml-15 outline-black relative ">
            
//             <div className="text-2xl font-semibold">Delivery Address</div>
//         </div>

//          <div className="w-200 bg-gray-300 py-10 px-15 mt-7 ml-15 outline-black relative ">
//             <div className="text-2xl font-semibold">Payment</div>
//         </div>
//         <div className="bg-gray-300 h-200 w-100  absolute top-0 right-0 mt-30 mr-50  py-10 px-5" >
//          <div>
//             {
//                 items.map((value)=><Checkcard key={value.id} value={value}></Checkcard>)
              
//             } 
//         </div> 
//         </div>


//         </>
//     )
// }

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);
  let total = 0;

  items.forEach((item) => {
    total += "finalPrice" in item
      ? (item.finalPrice / 100) * item.quantity
      : "defaultPrice" in item
        ? (item.defaultPrice / 100) * item.quantity
        : (item.price / 100) * item.quantity;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 max-w-4xl mx-auto mb-10">
        <img
          className="w-32 h-24 rounded-lg object-cover"
          src="https://cdn.dribbble.com/userupload/28176351/file/original-2f163c2fede027c929baa7b25f3e5d64.jpg"
          alt="Checkout"
        />
        <h1 className="text-3xl font-bold text-orange-500">Your Checkout</h1>
      </div>

      {/* Main Checkout Box */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="bg-white rounded-xl p-5 shadow-xl col-span-2 max-h-[60vh] overflow-y-auto scroll-bar-hidden">
          {items.map((item) => {
            const unitPrice =
              "finalPrice" in item
                ? item.finalPrice / 100
                : "defaultPrice" in item
                  ? item.defaultPrice / 100
                  : item.price / 100;
            const itemTotal = unitPrice * item.quantity;

            return (
              <div key={item.imageId || item.name} className="border-b pb-4 mb-4">
                <div className="flex gap-4">
                  <img
                    className="w-24 h-24 object-cover rounded-lg"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`}
                    alt={item.name}
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <div className="text-sm text-gray-500 mb-1">₹ {unitPrice.toFixed(2)} each</div>
                    <div className="flex justify-between text-sm">
                      <span>Quantity: {item.quantity}</span>
                      <span className="font-medium">Item Total: ₹ {itemTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Items</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Total Amount</span>
              <span className="font-semibold text-green-700">₹ {total.toFixed(2)}</span>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              🚚 Delivery will be made within 30 minutes.
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 mt-8 rounded-xl w-full transition duration-200">
            Proceed to Pay ₹ {total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}