import React, {useState} from "react";
const Context = React.createContext();

const CartFunction = ({children})=>{

        const [cart,setCart] = useState([])
        const [userInfo,setUserInfo] = useState([])
        const [items,setItems] = useState(0)
        const [total, setTotal] = useState(0)

        const onSubmit = (props) => {
            debugger;
            setUserInfo(props);
        }

        const onAdd = (product, qty) => {

            const isInCart = cart.find(item => item.id===product.id)

            if(!isInCart){
                setCart([...cart, {id:product.id,name:product.name,img:product.img,price:product.price,qty: qty, subtotal:(product.price*qty)}])
                setTotal(total+(product.price*qty))
                setItems(items+qty)
            }
            else{
                const cartAux = cart.map((item)=>{
                    if(item.id===product.id){
                        item.qty+=qty
                        item.subtotal+=(product.price*qty)
                        setItems(items+qty)
                    }
                    return item
                })
                setCart(cartAux)
                setTotal(total+(product.price*qty))
            }
        }

        const clearAllItem = () => {
            const cartAux = cart.splice()
            setCart(cartAux)
            setItems(0)
            setTotal(0)
        }

        const DeleteItem = (props) => {

            const item = cart.filter(item => item.id === props.id)
            const cartAux = cart.filter(item => item.id !== props.id)

            setCart(cartAux)
            setItems(items-1)
            setTotal(total-item[0].subtotal)
        }

        return <Context.Provider value={{cart,items,total,userInfo, onAdd, clearAllItem, DeleteItem, onSubmit}}>
                    {children}
               </Context.Provider>
}

export {CartFunction, Context}