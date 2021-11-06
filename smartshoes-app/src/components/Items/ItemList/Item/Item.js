import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Item = ({id,name,description,price,img,stock}) => {
    debugger;
    return (
        <>  <Link className="card-link" to={`/Item/${id}`}> 
            <Card style={{ width: '17rem', marginTop: '40px' }} key = {id}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text color="red">
                    {price}$
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
            </Link>
        </>
    )
}

export default Item

