import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Detail = ({id,name,description,price,img,stock}) => {
    return (
        <>  
            <div class="container">
                <div class="cardDetail">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">
                                
                                <div class="preview-pic tab-content">
                                <div class="tab-pane active" id={`${id}`}><img src={`${img}`}/></div>
                                </div>

                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{name}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no">41 reviews</span>
                                </div>
                                <p class="product-description">{description}</p>
                                <h4 class="price">current price: <span>${price}</span></h4>
                                <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 class="sizes">sizes:
                                    <span class="size" data-toggle="tooltip" title="10">10</span>
                                    <span class="size" data-toggle="tooltip" title="10.5">10.5</span>
                                    <span class="size" data-toggle="tooltip" title="11">11</span>
                                    <span class="size" data-toggle="tooltip" title="12">12</span>
                                </h5>
                                <h5 class="colors">colors:
                                    <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span class="color green"></span>
                                    <span class="color blue"></span>
                                </h5>
                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                                    <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Detail




