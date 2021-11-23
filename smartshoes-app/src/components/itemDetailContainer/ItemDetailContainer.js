import React, {useState,useEffect} from 'react'
/* useState: - useEffect: */
import  ItemDetail  from './itemDetail/ItemDetail';
/* useStateimport data from '../../db/data';*/
import { useParams } from 'react-router-dom';
import LoadingImage from '../LoadingImage/LoadingImage';

import db from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = (props) => {
    const [item,setItem] = useState([]);
    const { ItemId } = useParams([]);
    const [loading,setLoading] = useState(true);

    console.log('ItemId:' + ItemId);

    useEffect(() => {
        setLoading(true);

        const myItem = doc(db, 'products', ItemId);

         getDoc(myItem)
            .then((res) =>{
                const  results = { id: res.id, ...res.data() };
                setItem(results);
            }).finally(() => 
                setLoading(false));
    }, []);

    return (
        <>
            {
                loading ? <LoadingImage style={{ marginTop: '120px' }} /> : <ItemDetail id={item.id} name={item.name} description={item.description} price={item.price} img={item.img} stock={item.stock} promo={item.promo} off={item.off}/>
            }
        </>
    )
}

export default ItemDetailContainer