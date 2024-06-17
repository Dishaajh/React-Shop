import React, { useContext } from 'react'
//import link
import { Link } from 'react-router-dom';
//import cart context
import { CartContext } from '../Contexts/CartContext';

const CartItem = ({item}) => {
  //use constext from cart
  const {removeFromCart,increaseAmount,decreseAmount} = useContext(CartContext)
  //destructure item
  const {id,title,price,image,amount} = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div>
        {/* image */}
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>
          <Link to={`/product/${id}`}>
            <img className='max-w-[80px]' src={image} alt="" />
          </Link>
          <div className='w-full flex flex-col'>
            {/* title and remove icons btns */}
            <div className='flex justify-between mb-2'>
              {/* title */}
              <Link to={`/products/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
              {/* remove icon */}
                <div onClick={()=>removeFromCart(id)} 
                className='text-xl cursor-pointer'>
                  <div className='text-gray-500 j hover:text-red-500 transition'>X</div>
                </div>
            </div>
            <div className='flex gap-x-2 h-[36px] text-sm'>
              {/* qty */}
              <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                {/* minus icon */}
                <div onClick={()=>{decreseAmount(id)}} className='flex-1 h-full flex justify-center items-center cursor-pointer'>-</div>
              
              {/* amount */}
              <div className='h-full flex justify-center items-centre p-2'>{amount}</div>
              {/* plus icon */}
              <div onClick={()=>{increaseAmount(id)}} className='flex-1 h-full flex justify-center items-center cursor-pointer'>+</div>
              </div>
              {/* item price */}
              <div className='flex-1 flex items-center justify-around'>$ {price}</div>
              {/* final price */}
              {/* make the price at two decimal */}
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>{` $ ${parseFloat(price*amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem