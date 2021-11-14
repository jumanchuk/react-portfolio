import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

const ItemPromo = ({id,name,description,price,img,stock,promo,off}) => {
    
    return (
        <>  <Link className="card-link" to={`/Item/${id}`}> 
            <Card style={{ maxWidth: '17rem',marginTop: '10px' }} key = {id}>
                <Card.Img variant="top" style={{maxWidth: '17rem'}} src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text color="red">
                    {price}$ <Badge bg="warning" text="dark">{off} Off</Badge>
                    </Card.Text>
                </Card.Body>
            </Card>  
            </Link>
        </>
    )
}

export default ItemPromo

