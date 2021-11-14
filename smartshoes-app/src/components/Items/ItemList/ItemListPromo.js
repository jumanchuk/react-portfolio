
import React from 'react'
import ItemPromo from './Item/ItemPromo'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

const ItemListPromo = ({products}) => {

  return (
    <>
      <Container fluid className="CardContainer">
      <img src="/img/banner-2.jpg" alt="promo" />
      <div className="Promotion"><h2>Promotions</h2><a href="/AllProducts">View All Products</a></div>
      <CardGroup className="cardsGroup">

        {products.map((product)=>
          <ItemPromo key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img} stock={product.stock}  promo={product.promo} off={product.off}/>
        )}
      </CardGroup>
      </Container>
    </>
  )
}

export default ItemListPromo