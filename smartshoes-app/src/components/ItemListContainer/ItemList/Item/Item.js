import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = (props) => {
    return (
        <>
        
            <Card style={{ width: '18rem', margin: '42px' }} key = {props.id}>
                <Card.Img variant="top" src={props.img}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text color="red">
                    {props.price}$
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
     
        </>
    )
}

export default Item
