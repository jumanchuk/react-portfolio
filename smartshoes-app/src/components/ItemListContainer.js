import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="ItemList-component__container">
            <h1 className="ItemList-component__title">{greeting ?? 'Welcome to our Store'}</h1>
        </div>
    )
}

export default ItemListContainer


