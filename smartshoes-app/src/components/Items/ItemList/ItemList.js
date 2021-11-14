
import React from 'react'
import Item from './Item/Item'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

const ItemList = ({products}) => {

  return (
    <>
      <Container fluid className="CardContainer">
      <img src="/img/banner-1.jpg" alt="promo" />
      <CardGroup className="cardsGroup">
        {products.map((product)=>
          <Item key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img} stock={product.stock} promo={product.promo} off={product.off}/>
        )}
      </CardGroup>
      <img src="/img/banner-2.jpg" alt="promo" />
      </Container>
    </>
  )
}

export default ItemList


