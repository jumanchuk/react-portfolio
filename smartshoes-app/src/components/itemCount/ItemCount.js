import React, {useState} from "react";

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock);
    const [qty, setQty] = useState(0);
    const [msj, setMsj] = useState("Avaliable");

    const stockHandler = {

        sumStock: () =>{

            let uptStock = stock-1;
            let uptQty = qty +1;

            setQty(uptQty);
            setStock(uptStock);

            if(uptStock===0){
                setMsj("Not Avaliable")
            }

        },
        
        subStock: () =>{

            let uptStock = stock+1;
            let uptQty = qty - 1;

            setQty(uptQty);
            setStock(uptStock);

            if(uptStock!==0){
                setMsj("Avaliable")
            }    

        }
    }

    return(
        
        <>
        <div style={{marginBottom: '20px'}}>
        <div>Qty: {' '}
            <button id="sumBtn" class="btnHandler" onClick={stockHandler.sumStock} disabled={stock===0}>+</button>
            <span style={{marginLeft: '10px', padding: '5px'}}>{qty}</span>
            <button id="subBtn" class="btnHandler" style={{marginLeft: '10px'}} onClick={stockHandler.subStock} disabled={qty===0}>-</button>
            <span> ({stock > 0 ?  stock +" "+ msj : msj})</span> </div>
        </div>

        <button className="add-to-cart btn btn-default" onClick={()=>props.onAdd({qty})} disabled={qty===0}>Add to cart</button> 

        </>

    )

}

export default ItemCount