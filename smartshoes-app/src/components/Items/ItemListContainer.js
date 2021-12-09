import React, {useState,useEffect} from 'react'
/* useState: - useEffect: */
import  ItemList  from './ItemList/ItemList';
/*import data from '../../db/data';*/
import { useParams } from 'react-router-dom';
import LoadingImage from '../LoadingImage/LoadingImage';

import {db} from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const ItemListContainer = (props) => {
    const [products,setProducts] = useState([]);
    const { categoryId } = useParams([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        const  myProducts = categoryId ?
        query(collection(db,'products'), where('category','==',categoryId))
        : collection(db,'products');


         getDocs(myProducts).then((res) =>{
            const  results = res.docs.map(doc => {
                return {...doc.data(), id: doc.id};
            });

            setProducts(results);
        }).finally(() => setLoading(false));

    },[categoryId])


    return (
        <>
            {
                loading ? <LoadingImage/> : <ItemList products={products} />
            }
        </>
    )
}

export default ItemListContainer