import HeaderCart from "./HeaderCart";
import styles from "./Header.module.css"
import MealImage from "../../assets/meals.jpg"
const Header = ()=>{
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCart/>
            </header>
            <div className={styles["meal-image-container"]}>
                <img src={MealImage} alt="Meal"/>
            </div>
        </>
    )
}
export default Header;