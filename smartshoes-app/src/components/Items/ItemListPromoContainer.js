import React, {useState,useEffect} from 'react'
import  ItemListPromo  from './ItemList/ItemListPromo';
import data from '../../db/data';
import LoadingImage from '../LoadingImage/LoadingImage';

const ItemListPromoContainer = ({props}) => {
    debugger;
    
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    
    /*  */
    useEffect(() => {

        const productList = new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() =>{
                resolve(data)
            },3000)
        })

        productList.then((data) =>{
            setProducts(data.filter(i => i.promo === true))
            
        }).finally(() =>setLoading(false));

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


