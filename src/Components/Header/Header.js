import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/edu.png';

import { Transition } from "@headlessui/react";

import './Header.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
<div>
    
        <div>

        <nav className="bg-gray-800 px:h-44 p-5 m-5 rounded-xl font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex  h-16">
            <img className=' pb-5 w-24 h-24' src={logo} alt="" />
            <h1 className='text-3xl mt-2 pt-2 mr-5 pr-5 text-white '><b>Edu Quiz World</b></h1>
              <div className="flex items-end">
                <div className="hidden md:block">
                <div className="ml-10 mb-2 pt-2 flex items-right  space-x-4">
                  <Link className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium" to='/'>Home</Link>
                  <Link className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium" to='/topics'>Topics</Link>
                  <Link className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium" to='/statistics'>Statistics</Link>
                  <Link className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium" to='/blog'>Blog</Link>
                  <Link className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium" to='/about'>About</Link>
                
                <div className="flex items-center ml-5 pl-5">
                <div className="flex border ml-5 border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."/>
                <button className="px-4 text-white bg-blue-600 border-l rounded ">
                    Search
                </button>
                </div>
                </div>

                </div>
                </div>
              </div>



              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden  mt-11 mr-11 pr-11" id="mobile-menu">
                <div ref={ref} className=" bg-black h-full inline-flex -mt-11 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" to='/'>Home</Link>
                <Link className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" to='/topics'>Topics</Link>
                <Link className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" to='/statistics'>Statistics</Link>
                <Link className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" to='/blog'>Blog</Link>
                <Link className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" to='/about'>About</Link> 
                </div>
              </div>
            )}
          </Transition>
        </nav>
        </div>
    </div>
    );
};

export default Header;