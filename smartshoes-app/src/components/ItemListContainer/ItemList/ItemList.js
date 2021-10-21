
import React from 'react'
import Item from './Item/Item'

const ItemList = ({products}) => {
  return (
    <>
      {products.map((product)=>
    
        <Item key={product.id} name={product.name} description={product.description} price={product.price} img={product.img} stock={product.stock}/>
 
      )}
    </>
  )
}

export default ItemList