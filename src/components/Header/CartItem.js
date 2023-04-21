import styles from "./CartItem.module.css"
import useStore from "../../store/useStore"
const CartItem = ({id,name,price,amount}) => {
    const addOrder = useStore(state => state.addOrder)
    const reduceOrder = useStore(state => state.reduceOrder)
    return (
        <li className={styles.item}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.amount}>x {amount}</span>
                </div>
            </div>
            <div className={styles.action}>
                <button onClick={reduceOrder.bind(null,id)}>-</button>
                <button onClick={()=>{
                        if(amount<5) addOrder(id)
                    }}>+</button>
            </div>
        </li>
    )
}
export default CartItem