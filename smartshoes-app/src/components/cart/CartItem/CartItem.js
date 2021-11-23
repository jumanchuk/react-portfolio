
import React, {useContext} from 'react'
import { Context } from '../../../context/CartConext';

const CartItem = ({id,name,price,img,subtotal,qty}) => {

    const {DeleteItem} = useContext(Context);

    return (
        <>
        <div class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
            <div class="d-flex flex-row align-items-center">
                <div><img src={img} width="150" height="150" alt="" id="image"/></div>
                
                <div class="d-flex flex-column pl-md-3 pl-1">
                    <div>
                        <h6>{name}</h6>
                    </div>
                </div>
            </div>
            <div class="pl-md-0 pl-1"><b>${price}</b></div>
            <div class="pl-md-0 pl-2"> <span class="fa fa-minus-square text-secondary"></span><span class="px-md-3 px-1">{qty}</span><span class="fa fa-plus-square text-secondary"></span> </div>
            <div class="pl-md-0 pl-1"><b>${subtotal}</b></div>
            <span onClick={()=>DeleteItem({id})}><div class="close">&times;</div></span>
        </div>
        </>
    )
}

export default CartItem



