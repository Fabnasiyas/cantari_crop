
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/currease logo 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mx-7 my-7'>
        <nav className="shadow-md" style={{ height: '100px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center mt-10">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="h-12 w-auto" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block mt-10">
                        <div className="flex items-center space-x-4">

                            <Link to="/" className="text-gray-900 focus:outline-none focus:text-blue-700 focus:ring-4 focus:ring-gray-200">
                                <span className="py-2.5 px-5 text-sm font-medium  hover:bg-gray-100 hover:text-blue-700 rounded-full">
                                    Home
                                </span>
                            </Link>

                            <Link to="/" className="text-gray-900 focus:outline-none focus:text-blue-700 focus:ring-4 focus:ring-gray-200">
                                <span className="py-2.5 px-5 text-sm font-medium  hover:bg-gray-100 hover:text-blue-700 rounded-full">
                                    About Us
                                </span>
                            </Link>
                            <Link to="/" className="text-gray-900 focus:outline-none focus:text-blue-700 focus:ring-4 focus:ring-gray-200">
                                <span className="py-2.5 px-5 text-sm font-medium  hover:bg-gray-100 hover:text-blue-700 rounded-full">
                                    Conatct Us
                                </span>
                            </Link>
                            <Link to="/shop">
                                <button className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-600 focus:z-10 focus:ring-4 focus:ring-blue-200 flex items-center">
                                    <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                                    Shop
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path
                                        className="fill-current text-white"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                    />
                                ) : (
                                    <path
                                        className="fill-current text-white"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col items-center pt-4 pb-2 space-y-4">
                            <Link to="/">
                                <button className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                                    Home
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                                    About Us
                                </button>
                            </Link>
                            <Link to="/shop">
                                <button className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                                    Shop
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav></div>
    );
};

export default NavbarPage;
