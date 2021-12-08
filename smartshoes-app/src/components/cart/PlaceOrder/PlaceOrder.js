import React, {useContext, useState,useEffect} from 'react'
/*import data from '../../db/data';*/
import { Context } from '../../../context/CartConext';
import db from '../../firebase/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import LoadingImage from '../../LoadingImage/LoadingImage';
import OrderSuccess from './OrderSuccess/OrderSuccess';

const PlaceOrder = () => {
debugger;

    const {cart,total,userInfo,clearAllItem} = useContext(Context);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

    // Add a new document with a generated id
    const newDataRef = doc(collection(db, "orders"));
    debugger;

        let data = {
            buyer: userInfo,
            items: cart,
            date: Date.now(),
            total: total,
        };
        
    // later...
    setDoc(newDataRef, data).finally(() => 
    setLoading(false));
      
    clearAllItem();

    }, []);

    return (
        <>
            {
                loading ? <LoadingImage style={{ marginTop: '120px' }} /> : <OrderSuccess style={{ marginTop: '120px' }} />
            }
        </>
    )
}

export default PlaceOrder

