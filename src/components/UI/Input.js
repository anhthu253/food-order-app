import React from "react"
import styles from "./Input.module.css"
const Input = React.forwardRef((props,ref)=> {
    return (
        <div className={`${styles.control} ${!props.isValid?styles.invalid:''} ${props.className}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                ref={ref}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                >
            </input>
        </div>
        
    )
})
export default Input