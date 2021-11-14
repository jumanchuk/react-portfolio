
import React, {useState, useContext}  from 'react'
import ItemCount from '../../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/CartConext';

const ItemDetail = ({id,name,description,price,img,stock}) => {

      const [buy, setBuy] = useState(false);
      const {onAdd} = useContext(Context)
  
      const addItem = (props) => {
          setBuy(true)
          debugger;
          onAdd({id,name,description,price,img},props.qty)
          alert(props.qty +' Item(s) Added Successfully to the cart')
      }

      return (
          <>  
              <div className="container">
                  <div className="cardDetail">
                      <div className="container-fliud">
                          <div className="wrapper row">
                              <div className="preview col-md-6">
                                  
                                  <div className="preview-pic tab-content">
                                  <div className="tab-pane active" id={`${id}`}><img src={`${img}`} alt={`${'preview-'+id}`}/></div>
                                  </div>
  
                              </div>
                              <div className="details col-md-6">
                                  <h3 className="product-title">{name}</h3>
                                  <div className="rating">
                                      <div className="stars">
                                          <span className="fa fa-star checked"></span>
                                          <span className="fa fa-star checked"></span>
                                          <span className="fa fa-star checked"></span>
                                          <span className="fa fa-star"></span>
                                          <span className="fa fa-star"></span>
                                      </div>
                                      <span className="review-no">41 reviews</span>
                                  </div>
                                  <p className="product-description">{description}</p>
                                  <h4 className="price">current price: <span>${price}</span></h4>
                                  <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                  <h5 className="sizes">sizes:
                                      <span className="size" data-toggle="tooltip" title="10">10</span>
                                      <span className="size" data-toggle="tooltip" title="10.5">10.5</span>
                                      <span className="size" data-toggle="tooltip" title="11">11</span>
                                      <span className="size" data-toggle="tooltip" title="12">12</span>
                                  </h5>
                                  <h5 className="colors">colors:
                                      <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                      <span className="color green"></span>
                                      <span className="color blue"></span>
                                  </h5>
                                  <div className="action" style={{marginTop: '10px'}}>
                                      {!buy ? <ItemCount stock={stock} onAdd={addItem}/> : 
                                      <Link to='/Cart'><button className="add-to-cart btn btn-default" type="button">Go to cart</button></Link>}
                                      <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
  
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </>
      )
  }

export default ItemDetail
