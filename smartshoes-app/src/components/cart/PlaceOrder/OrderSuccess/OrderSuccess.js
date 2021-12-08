import React from 'react'
import { Image } from "react-bootstrap";

export const OrderSuccess = () => {
  return (
      <>
      <Image style={{ marginTop: '10%'}} width="250" className="mx-auto d-block" src="/img/extras/order-placed.gif" />
      <div Id="tksBox" className="orderPlaced" wait={5000}>
      <h1 style={{ marginTop: '2%'}} className="mx-auto d-block">THANK YOU!</h1>
      <p className="mx-auto d-block" style={{ marginBottom: '10%' }}>Your order has been successfully placed.</p>
      </div>
      </>
    );
}

export default OrderSuccess;

