
import React from 'react'
import Detail from './Item/Detail'

const ItemDetail = ({item}) => {
  debugger;
  return (
    <>
        {item.map((item)=>
          <Detail  key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} img={item.img} stock={item.stock}/>
        )}
    </>
  )
}

export default ItemDetail
