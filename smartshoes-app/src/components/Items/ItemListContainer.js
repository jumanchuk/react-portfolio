import React, {useState,useEffect} from 'react'
/* useState: - useEffect: */
import  ItemList  from './ItemList/ItemList';
import data from '../../db/data';
import { useParams } from 'react-router-dom';
import LoadingImage from '../LoadingImage/LoadingImage';

const ItemListContainer = (props) => {
    const [products,setProducts] = useState([]);
    const { categoryId } = useParams([]);
    const [loading,setLoading] = useState(true);

    console.log(categoryId);

    /*  */
    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() =>{
                resolve(data)
            },3000)
        })

        productList.then((data) =>{
            debugger;
            categoryId ? setProducts(data.filter(i => i.category === parseInt(categoryId)))
            : setProducts(data);
            
        }).finally(() =>setLoading(false));

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


