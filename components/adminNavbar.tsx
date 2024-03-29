"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Separator } from './ui/separator';

const AdminNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    
      <div className="">
      <nav className="sticky text-slate-600 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 lg:px-12">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/admin">
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-2 md: ${
                navbar ? 'block' : 'hidden'
              }`}
            >
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl md:text-sm py-2 md:px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="/admin" onClick={() => setNavbar(!navbar)}>
                    Dashboard
                  </Link>
                </li>
                <li className="pb-6 text-xl md:text-sm py-2 px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="/admin/products" onClick={() => setNavbar(!navbar)}>
                    Products
                  </Link>
                </li>
                <li className="pb-6 text-xl md:text-sm py-2 px-6 text-center md:pb-3 border-b-1 md:border-b-0  hover:bg-[#84A88E]  border-zinc-500  md:hover:text-[#84A88E] md:hover:bg-transparent">
                  <Link href="/admin/orders" onClick={() => setNavbar(!navbar)}>
                    Orders
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

export default AdminNavbar;