import {create} from "zustand"
import meals from "../db/Meals"
const useStore = create(set => {
    return {
        orders:meals.map(meal => {return {...meal,amount:0}}),
        addOrder: (id) => {
            set(state =>{
                const updatedOrders = state.orders.map(order => order.id===id?{...order,amount:order.amount + 1}:order)
                return {orders:updatedOrders}
            })
        },
        reduceOrder: (id) => {
            set(state =>{
                const updatedOrders = state.orders.map(order => order.id===id?{...order,amount:order.amount - 1}:order)
                return {orders:updatedOrders}
            })
        },
        setOrder:(id,amount)=>{
            set(state =>{
                const updatedOrders = state.orders.map(order => order.id===id?{...order,amount:amount}:order)
                return {orders:updatedOrders}
            })
        }
    }
})
export default useStore;