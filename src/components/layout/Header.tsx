/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
   return (
      <div className="h-[58px] box-border pt-4 w-screen bg-orange-500 flex justify-between items-center px-4 shadow-md">
         <div className="h-full flex items-center">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="icon icon-tabler icon-tabler-menu-2 size-7 stroke-white"
               viewBox="0 0 24 24"
               strokeWidth="2"
               fill="none"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M4 6l16 0" />
               <path d="M4 12l16 0" />
               <path d="M4 18l16 0" />
            </svg>
         </div>
         <Link className=" flex-1 h-full" href={"/"}>
            <img src="/logo_banner.svg" alt="" className="w-full h-10" />
         </Link>
         <div className="h-full flex items-center">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="icon icon-tabler icon-tabler-menu-2 size-8 stroke-white"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               fill="none"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
               <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
               <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
         </div>
      </div>
   );
};

export default Header;
