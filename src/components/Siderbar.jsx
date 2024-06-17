import React from 'react'
//import Link
import { Link } from 'react-router-dom'
//import context
import { useContext } from 'react'
//import icons
//omport components
import CartItem from '../components/CartItem'
//import cart context
import { SidebarContext } from '../Contexts/SidebarContext'
//import cart Context
import { CartContext } from '../Contexts/CartContext'

const Siderbar = () => {

  //destucture 
  const {isOpen,handleClose} = useContext(SidebarContext);
  //  console.log(useContext(CartContext));

  //buttons 


  const {cart,clearCart,total,itemAmount}=useContext(CartContext);
  console.log(total);

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}
      w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>

      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <div className=' '>
            Back
          </div>
        </div>
      </div>
      {/******* * problem with total showing on web screen ** in below css** viru****solved */}
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item)=>{
        return <CartItem item={item} key={item.id}/>
      })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className=' flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>${parseFloat(total.toFixed(2))}
          </div>

          <Link to={'/'}>
            <div onClick={handleClose} className='bg-gray-700 text-white w-12 h-12 py-4 px-10 flex justify-center items-center rounded-lg'>Continue</div>
          </Link>
          <Link to={'/checkout'}>
            <div className='bg-gray-700 text-white w-12 h-12 py-4 px-10 flex justify-center items-center rounded-lg'>CheckOut</div>
          </Link>
        
         {/* clear cart icon */}
         <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl px-10 rounded-lg'>clear</div>
         </div>
      </div>
    </div>
  )
}

export default Siderbar