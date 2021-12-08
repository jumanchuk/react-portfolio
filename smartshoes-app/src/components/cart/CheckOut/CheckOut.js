import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from '../../../context/CartConext';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder/PlaceOrder'


const CheckOut = () => {

    const {onSubmit} = useContext(Context);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const placeOrder = (props) => {
        onSubmit({fullName,email,phone})
    }

  return (
    <>  
    <div className="container" style={{padding: '50px'}} >
        <h1 className="mb-5">Almost done! 😁🙌 Complete to place the Order:</h1>
        <Form>
            <Form.Group className="mb-3" controlId="Form.Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Normal text" 
                onChange={e => setFullName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" 
                onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.Phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Normal text"
                onChange={e => setPhone(e.target.value)}
                 />
            </Form.Group>
            {<Link to="/PlaceOrder"><button className="btn btn-sm bg-dark text-white px-lg-5 px-3" variant="outline-success" onClick={evt => placeOrder(evt)}>Continue</button></Link>} 
        </Form>
        </div>
    </>
    
  )


}

export default CheckOut 
