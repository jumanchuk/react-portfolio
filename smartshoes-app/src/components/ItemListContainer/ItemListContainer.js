import React, {useState,useEffect} from 'react'
/* useState: - useEffect: */
import ItemList from './ItemList/ItemList';
import data from '../../db/data';

const ItemListContainer = (props) => {

    const [products,setProducts] = useState('');
    const [loading,setLoading] = useState(true);

    /*  */
    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(data)
            },3000)
        })

        productList.then((data) =>{
            debugger;
            setProducts(data);
            setLoading(false);
        })

    },[])


    return (
        <>
        {loading ? <h1>Loading...</h1> : <ItemList products={products} />}
        </>
    )
}

export default ItemListContainer


