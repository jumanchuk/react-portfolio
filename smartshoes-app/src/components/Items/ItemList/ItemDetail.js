
import React from 'react'
import Detail from './Item/Detail'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

const ItemDetail = ({item}) => {
  return (
    <>
        {item.map((item)=>
          <Detail id={item.id} name={item.name} description={item.description} price={item.price} img={item.img} stock={item.stock}/>
        )}
    </>
  )
}

export default ItemDetail
