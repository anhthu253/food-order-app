import styles from "./HeaderCart.module.css"
import CartIcon from "./CartIcon";
import Cart from "./Cart"
import useStore from "../../store/useStore";
import Modal from "../UI/Modal";
import { useState } from "react";
const HeaderCart = ()=>{
    const totalOrderNumbers = useStore(state => state.orders).reduce((sum, currentOrder )=> sum + currentOrder.amount,0)
    const [toggleModal, setToggleModal] = useState(false)
    return (
        <>
        {toggleModal && <Modal closeModal={()=>setToggleModal(false)}><Cart closeModal={()=>setToggleModal(false)}/></Modal>}
        <button className={styles.button} onClick={()=>setToggleModal(true)}>
            <span className={styles.icon}><CartIcon className={styles.svg}/></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{totalOrderNumbers}</span>
        </button>
        </>
    )
}
export default HeaderCart;