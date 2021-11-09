import React, {useState,useEffect} from 'react'
/* useState: - useEffect: */
import  ItemDetail  from './ItemList/ItemDetail';
import data from '../../db/data';
import { useParams } from 'react-router-dom';
import LoadingImage from '../LoadingImage/LoadingImage';

const ItemDetailContainer = (props) => {
    debugger;
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
            },3000)
        })

        selectItem.then((data) =>{
            debugger;
            ItemId ? setItem(data.filter(i => i.id === parseInt(ItemId)))
            : setItem(data);
            
        }).finally(() =>setLoading(false));

    },[ItemId])


    return (
        <>
            {
                loading ? <LoadingImage style={{ marginTop: '120px' }} /> : <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailContainer