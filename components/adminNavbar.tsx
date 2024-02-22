"use client"
import Link from 'next/link';
import { useState } from 'react';

const AdminNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 min-h-screen">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">
                  <img src="logo.png" alt="" className='w-40' />
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/admin">
                    Dashboard
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/products">
                    Products
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/stock">
                    Stock
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="orders">
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