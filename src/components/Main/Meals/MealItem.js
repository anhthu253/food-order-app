import styles from "./MealItem.module.css"
import useStore from "../../../store/useStore"
import Input from "../../UI/Input"
import {useState, useRef, useEffect} from "react"
const MealItem = ({id,name,description,price,amount}) => {
    const [enteredInputAmount, setEnterInputAmount]=useState(amount)
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const addOrder = useStore(state => state.addOrder)
    const setOrder = useStore(state => state.setOrder)

    useEffect(()=>{
        setEnterInputAmount(amount)
    },[amount])
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(amountIsValid) {
            addOrder(id);
        }
    }

    const handleOnChange =(event) =>{
        const enteredAmount = Number(event.target.value)
        setEnterInputAmount(enteredAmount);
        if(enteredAmount < 0 || enteredAmount > 5) 
            setAmountIsValid(false)
        else{
            setAmountIsValid(true)
            setOrder(id,enteredAmount)
        }
    }

    return (
        <li className={styles.item}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>${price}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <Input className={styles.Input} ref={amountInputRef} id="amount" label="Amount" type="number" value={enteredInputAmount} 
                isValid={amountIsValid}
                onChange={handleOnChange}
                />
                <button>+Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
        </li>
    )
}
export default MealItem