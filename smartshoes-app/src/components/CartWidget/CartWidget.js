import React, {useContext} from 'react'
import { BsCart,BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Context } from '../../context/CartConext';

export const CartWidget = ({icon}) => {

    const {items} = useContext(Context);

    return (
        <>
        <Link to='/Cart' className="btn-cart">{items}
            <BsCart size={'35px'} hidden={items>0}/>
            <BsFillCartFill size={'35px'} hidden={items===0}/>
            </Link>
        </>
    )
}