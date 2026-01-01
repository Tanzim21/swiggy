

import { useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router";
import AuthPopup from "./AuthPopup";



export default function RestHeader({onSignInClick} ) {

    const counter = useSelector(state => state.cartslice.count);
      const [isAuthOpen, setIsAuthOpen] = useState(false);

     const handleSignInClick = () => {
      setIsAuthOpen(true);
     };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };
   

    return (
        <div className="container w-full mx-auto py-4 px-8 bg-gray-100 text-5xl flex justify-between items-center">
            
            <div className="">
                <p className="text-orange-600 font-bold">Swiggy</p>
            </div>


            <div className=" flex  gap-8 items-center justify-between ml-120">
                
                 <div className="flex justify-between gap-2 items-center ">
                <Link
                to="/SearchData"
                className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition"

                
                >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-800">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="white"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-2xl font-semibold  hover:text-orange-600 transition">Search</span>
                </Link>
                </div>

                
                {/* <div className="flex justify-between gap-2 items-center " >
                 <svg className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition w-6 h-6" viewBox="0 0 24 24"  >
                 <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 21C6 17.134 8.68629 14 12 14C15.3137 14 18 17.134 18 21" 
                stroke="currentColor" strokeWidth="2"/>
                </svg>
                <button className="text-2xl font-semibold  hover:text-orange-600 transition cursor-pointer">sign in</button>
      
                </div> */}

            <div className="flex justify-between gap-2 items-center"  onClick={() => setIsAuthOpen(true)}>
                  

        <svg className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition w-6 h-6" viewBox="0 0 24 24">
       <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 21C6 17.134 8.68629 14 12 14C15.3137 14 18 17.134 18 21" 
      stroke="currentColor" strokeWidth="2"/>
     </svg>
     <button className="text-2xl font-semibold hover:text-orange-600 transition cursor-pointer" >
    sign in
      </button>
    </div>

                <div className="flex justify-between gap-2 items-center ">
                   <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                        <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15848 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                    <span className="text-2xl font-semibold  hover:text-orange-600 transition">Help</span>

                </div>
               <div className="flex justify-between gap-2 items-center ">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
                  <line x1="9" y1="14" x2="14" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9.5" cy="13.5" r="1" fill="currentColor"/>
                  <circle cx="13.5" cy="9.5" r="1" fill="currentColor"/>
                </svg>
                <span className="text-2xl font-semibold  hover:text-orange-600 transition">Offers</span>

                </div>

                <div className="flex justify-between gap-2 items-center">
                <Link 
                    to="/Checkout"
                    className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition"
                >
                    {/* Inline SVG */}
                    <svg
                        className="w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 3h2.6l1.8 9.2A2 2 0 0 0 9.3 14h8.4a2 2 0 0 0 1.9-1.4L21 6H6" />
                        <path d="M16 3l-1 3" />
                        <circle cx="10" cy="19" r="1.4" fill="currentColor" stroke="none" />
                        <circle cx="18" cy="19" r="1.4" fill="currentColor" stroke="none" />
                    </svg>

                    {/* Cart text */}
                    <span className="text-2xl font-semibold">
                        Cart ({counter})
                    </span>

                </Link>
                </div>

                
                
            </div>
        
           <div>
    
    



    {/* ADD THIS AT THE END - The Auth Popup */}
    <AuthPopup 
      isOpen={isAuthOpen} 
      onClose={() => setIsAuthOpen(false)} 
    />
  </div>     
            

        </div>
    )
}
