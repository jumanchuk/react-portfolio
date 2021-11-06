import React from 'react'
import { BsCart } from 'react-icons/bs';

export const CartWidget = ({icon}) => {
    return (
        <a href="http://localhost:3000/" className="btn-cart"><BsCart size={'35px'} /></a>
    )
}