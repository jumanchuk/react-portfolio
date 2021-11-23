import React, {useState,useEffect} from 'react'
import  ItemListPromo  from './ItemList/ItemListPromo';
/*import data from '../../db/data';*/
import LoadingImage from '../LoadingImage/LoadingImage';
import db from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListPromoContainer = ({props}) => {

    
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        const  myProducts =  query(collection(db,'products'), where('promo','==',true))

         getDocs(myProducts).then((res) =>{
            const  results = res.docs.map(doc => {
                return {...doc.data(), id: doc.id};
            });

            setProducts(results);
        }).finally(() => setLoading(false));

    },[])


    return (
        <>
            {
                loading ? <LoadingImage/> : <ItemListPromo products={products} />
            }
        </>
    )
}

export default ItemListPromoContainer


