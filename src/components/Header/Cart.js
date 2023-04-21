import styles from "./Cart.module.css"
import useStore from "../../store/useStore"
import CartItem from "./CartItem"
const Cart = ({closeModal}) => {
    const orders = useStore(state => state.orders)
    return (
        <>
            <div>
                <ul className={styles.list}>
                    {orders.filter(order => order.amount >0).map(order  => <CartItem key={order.id} {...order}/>)}
                </ul>
            </div>
          
            <div className={styles.total}>
                <h2>Total Amount</h2>
                <h2>${orders.reduce((sum, order)=> sum + order.price * order.amount, 0).toFixed(2)}</h2>
            </div>
            <div className={styles.action}>
                <button className={styles.close} onClick={closeModal}>Close</button>
                <button className={styles.order}>Order</button>
            </div>
          
        </>
    )
}
export default Cart