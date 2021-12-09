import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from '../../../context/CartConext';
import 'firebase/firestore';
import {db,getCollection} from '../../firebase/firebase';
import { addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CheckOut = () => {

    const {clearAllItem} = useContext(Context);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const {cart,total} = useContext(Context);
    const {completed,setCompleted} = useState(false);

    const PlaceOrder = async () => {
        debugger;
        const collection = getCollection(db, "orders");

        let auxCart = cart.map(function(obj) {
            return {
              id: obj.id,
              name: obj.name,
              price: obj.price,
            }
          });

        let data = {
            buyer: {
                fullName: fullName,
                email: email,
                phone: phone,
            },
            items: auxCart?.map((item) => item),
            total: total,
          };

            try {
              const addProducts = await addDoc(collection,data);

              debugger;
              if (addProducts?._key?.path?.segments?.[1] !== '') {
                debugger;
                Swal.fire(
                    'Success!!',
                    'The purchase has been made successfully',
                    'success'
                  ); 

                clearAllItem();
                setCompleted(true);

              }
            } catch (error) {
                debugger;
              console.log(error);
            }
          };

  return (
    <>  
    <div className="container" style={{padding: '50px'}} hidden = {completed} >
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
            {<Link to="/CheckOut"><button className="btn btn-sm bg-dark text-white px-lg-5 px-3" variant="outline-success" onClick={evt => PlaceOrder(evt)} wait='5000'>Continue</button></Link>} 
        </Form>
        </div>
    </>
    
  )


}

export default CheckOut 
