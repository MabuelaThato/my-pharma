"use client"
import { Heart, LogOut, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const UserNavbar = ()=> {
  const [navbar, setNavbar] = useState(false);

  return (
    <div >
      <nav className="sticky text-slate-600 shadow py-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 lg:px-12">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/user">
                <img src="/logo.png" alt="" className='w-14'/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-slate-400 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <span>close</span>
                  ) : (
                   <span>hamburger</span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
             className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-2 md: ${
              navbar ? 'block' : 'hidden'
            }`}
            >
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl md:text-sm py-2 md:px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="/user" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl md:text-sm py-2 md:px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="/user/favourites" onClick={() => setNavbar(!navbar)}>
                    <div className='flex gap-2'>
                      <Heart size={18}/>
                      <div>Favourites</div>
                    </div>
                  </Link>
                </li>
                <li className="pb-6 text-xl md:text-sm py-2 md:px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="/user/cart" onClick={() => setNavbar(!navbar)}>
                  <div className='flex gap-2'>
                    <ShoppingCart size={18}/>
                    <div>Cart</div>
                  </div>
                  </Link>
                </li>
                <li className="pb-6 text-xl md:text-sm py-2 md:px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    <div className='flex gap-2 items-center'>
                    <LogOut size={18}/>
                    <div>Log-out</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;