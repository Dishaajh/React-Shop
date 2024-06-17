import React, { useContext, useEffect, useState } from 'react';
//sidebar Context
import { SidebarContext } from '../Contexts/SidebarContext'

//cart context
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  //header state
  const [isActive,setisActive] = useState(false);
  const {isOpen , setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext);
  //event listner
  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     window.scrollY > 60 ? setisActive(true) : setisActive(false);
  //   })
  // })
  return (
    <header className={`p-5 bg-gray-700 fixed w-full z-10 trasition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={'/'}>
        <div className='w-[40px] text-white'><h1>Home</h1></div>
      </Link>
      <div className='text-white font-semibold'>Uttara Shop</div>
      {/* <div className='text-white  flex '>Contact</div> */}
      {/* cart */}
        <div onClick={()=>{setIsOpen(!isOpen)}} 

        className='cursor-pointer flex relative text-white'>
          cart
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
        </div>
    </header >
  )
}

export default Header