
import React from 'react'
import Item from './Item/Item'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

const ItemList = ({products}) => {
  return (
    <>
      <Container fluid className="CardContainer">
      <CardGroup className="cardsGroup">
        {products.map((product)=>
          <Item id={product.id} name={product.name} description={product.description} price={product.price} img={product.img} stock={product.stock}/>
        )}
      </CardGroup>
      </Container>
    </>
  )
}

export default ItemList