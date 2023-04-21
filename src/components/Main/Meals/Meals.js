import MealItem from "./MealItem"
import styles from "./Meals.module.css"
import useStore  from "../../../store/useStore"
const Meals = ()=>{
    const orders = useStore(state => state.orders)
    return (
        <section className={styles.meals}>
            <ul>
            {orders.map(meal => <MealItem key={meal.id} {...meal}/>)}
            </ul>
        </section>
    )
}
export default Meals