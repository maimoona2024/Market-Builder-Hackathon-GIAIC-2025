"use client"
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


const Header = () => {
    let name;
    const [open, setOpen] = useState(false)
    const [seo, setSeo] = useState("Test")
    return (
        <>
            <header className="bg-[#FBEBB5] py-2">
                <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
                    <Link href="/">
                    </Link>
                    <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
                    <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full flex flex-col items-center `}>
                        <ul className="text-base text-black lg:flex lg:justify-between">
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/#hero">Home</Link>

                            </li>
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className='p-3 cursor-pointer flex sm:flex-row sm:justify-center items-center flex-col gap-2'>
                                <Link href="/account">
                                    <FaRegUser className="text-md hover:text-gray-800" />
                                </Link>
                                <Link href="/search">
                                    <IoSearch className="text-md hover:text-gray-800" />
                                </Link>
                                <Link href="/wishlist">
                                <FaRegHeart className='text-md hover:text-gray-800' />
                                </Link>
                                <Link href="/cart">
                                    <MdOutlineShoppingCart className="text-md hover:text-gray-800" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

        </>

    )
}

export default Header;