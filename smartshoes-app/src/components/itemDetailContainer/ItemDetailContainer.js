import React, {useState,useEffect} from 'react'
/* useState: - useEffect: */
import  ItemDetail  from './itemDetail/ItemDetail';
import data from '../../db/data';
import { useParams } from 'react-router-dom';
import LoadingImage from '../LoadingImage/LoadingImage';

const ItemDetailContainer = (props) => {
    const [item,setItem] = useState([]);
    const { ItemId } = useParams([]);
    const [loading,setLoading] = useState(true);

    console.log('ItemId:' + ItemId);
    
    /*  */
    useEffect(() => {
        const selectItem = new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() =>{
                resolve(data)
            },1000)
        })

        selectItem.then((data) =>{
            ItemId ? setItem(data.filter(i => i.id === parseInt(ItemId)))
            : setItem(data);
            
        }).finally(() =>setLoading(false));

    },[ItemId])

    return (
        <>
            {
                loading ? <LoadingImage style={{ marginTop: '120px' }} /> : <ItemDetail id={item[0].id} name={item[0].name} description={item[0].description} price={item[0].price} img={item[0].img} stock={item[0].stock} promo={item[0].promo} off={item[0].off}/>
            }
        </>
    )
}

export default ItemDetailContainer