import React, {useContext} from 'react'
import { Context } from '../../context/CartConext';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart,items,total,clearAllItem} = useContext(Context);

  return (
    <>
        <div class="container bg-white rounded-top mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-10 col-12 pt-3">
                    <div class="d-flex flex-column pt-4">
                        <div>
                            <h5 class="text-uppercase font-weight-normal">shopping cart</h5>
                        </div>
                        <div class="font-weight-normal">{items} items</div>
                    </div>
                    
                    {items > 0 ? cart.map((item)=>
                        <CartItem id={item.id} name={item.name} img={item.img} price={item.price} subtotal={item.subtotal} qty={item.qty} />
                    ):"Your Cart 🛒 is Empty 🥺"}

                </div>
            </div>
        </div>
        <div class="container bg-light rounded-bottom py-4">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-10 col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <div> <Link to='/Home'><span class="btn btn-sm bg-light border border-dark">GO BACK</span></Link> </div>
                        <div> <button class="btn btn-sm bg-light border border-dark" onClick={clearAllItem} hidden={items<1}> EMPTY CART</button> </div>
                        <div class="px-md-0 px-1" id="footer-font" hidden={items<1}> <b class="pl-md-4">Total<span class="pl-md-4">  ${Math.round(total * 100)/100}</span></b> </div>
                        <Link to='/CheckOut'><button class="btn btn-sm bg-dark text-white px-lg-5 px-3" hidden={!items}>Continue</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
  )


}

export default Cart 
