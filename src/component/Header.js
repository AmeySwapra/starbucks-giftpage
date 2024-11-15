import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from "../assests/img/logo.png"
import { RiUserLine } from "react-icons/ri"
import { BsSearch, BsShop } from "react-icons/bs"
import welcomeImage from "../assests/img/Welcome_Website.jpg"
import { IoHomeSharp, IoHomeOutline } from "react-icons/io5"
import { HiOutlineGift, HiGift } from "react-icons/hi"
import { CiCoffeeCup } from "react-icons/ci"
import { BsCreditCard2Front } from "react-icons/bs"

const Header = () => {
    const location = useLocation().pathname
    console.log(location)

    return (
        <>
            
            <div className='w-full bg-white hidden sm:flex'>
                <header className=' md:w-4/5 m-auto flex flex-col lg:flex-row items-center sm:gap-8 md:gap-10 lg:gap-16 py-4'>
                    <div className='min-w-[40px]'>
                        <img src={logo} className="w-10" alt=''/>
                    </div>
                    <nav className='flex gap-10 lg:gap-16 xl:mr-16'>
                        <NavLink to={""} >Home</NavLink>
                        <NavLink to={""} >Gift</NavLink>
                        <NavLink to={""} >Order</NavLink>
                        <NavLink to={""} >Pay</NavLink>
                        <NavLink to={""} >Store</NavLink>
                    </nav>

                    <div className=' text-xl text-slate-500 w-full max-w-[300px] shadow-md flex py-2 px-5 rounded-full '>
                        <BsSearch />
                        <input type="text" className='text-sm w-full bg-transparent border-none outline-none px-3' placeholder="Looking for something specific ?" />
                    </div>

                    <div className='text-xl text-slate-500 border p-1 rounded-full border-slate-500 xl:ml-auto'>
                        <RiUserLine />
                    </div>
                </header>
            </div>

           
            <div className='h-40 sm:hidden overflow-hidden relative '>
                <div className=''>
                    <img src={welcomeImage} alt=''/>
                </div>
                <div className='w-full absolute top-0 text-white text-2xl p-3'>
                    <div className='px-3 py-2 sm:w-11/12 m-auto flex justify-between'>
                        <Link to={""}>
                            <BsShop />
                        </Link>
                        <Link to={""} className="border-2 border-white border-solid rounded-full">
                            <RiUserLine />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-0 flex justify-between w-full bg-white sm:hidden z-50 '>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={""} className="text-xl">
                        {
                            location === "" ? <IoHomeSharp className='text-green-800' /> : <IoHomeOutline className='text-green-500' />
                        }

                    </Link>
                    <p className='text-xs'>Home</p>
                </div>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={""} className="text-xl">
                        {
                            location === "" ? <HiGift className='text-green-800' /> : <HiOutlineGift className='text-green-500' />
                        }
                    </Link>
                    <p className='text-xs'>Gift</p>
                </div>
                <div className='flex items-center flex-col  w-full'>
                    <Link to={""} className="text-xl ">
                        <div className='h-9 w-16  relative flex justify-center ite  ms-center rounded-full '>
                            <div className='absolute -top-7 text-4xl p-3 bg-green-600  rounded-full'>
                                {
                                    location === "" ? <CiCoffeeCup className='text-white' /> : <CiCoffeeCup className='text-white' />
                                }
                            </div>
                        </div>


                    </Link>
                    <p className='text-xs bg-white w-full text-center h-full '>Order</p>
                </div>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={""} className="text-xl">
                        {
                            location === "" ? <BsCreditCard2Front className='text-green-800' /> : <BsCreditCard2Front className='text-green-500' />
                        }

                    </Link>
                    <p className='text-xs'>Pay</p>
                </div>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={""} className="text-xl">
                        {
                            location === "" ? <BsSearch className='text-green-800' /> : <BsSearch className='text-green-500' />
                        }
                    </Link>
                    <p className='text-xs'>Search</p>
                </div>

            </div>
        </>
    )
}

export default Header