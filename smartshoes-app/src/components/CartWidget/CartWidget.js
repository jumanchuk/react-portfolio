import React from 'react'
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const CartWidget = ({icon}) => {
    return (
        <Link to='/Cart' className="btn-cart"><BsCart size={'35px'} /></Link>
    )
}