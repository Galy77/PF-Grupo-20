import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER} from "./actionTypes"

const initialState = {
    user:{},
    products:[],
    orders:[]

}

export const reducer = (state = initialState,{type,payload})=>{
    switch (type) {
        //USER
        case ADD_USER:
            return{
                ...state,
                user:payload
            }
            
        case REMOVE_USER:
            return{
                ...state,
                user: {}
            }
        //PRODUCT
        case ADD_PRODUCT:
            return{
                ...state,
                products:[...state.products,payload]
            }
            
        case REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(el => el.id !== payload)
            }
        //ORDER
        case ADD_ORDER:
            return{
                ...state,
                orders:[...state.orders,payload]
            }
            
        case REMOVE_ORDER:
            return{
                ...state,
                orders: state.orders.filter(el => el.id !== payload)
            }

        default:
            return{
                ...state
            }
            
    }
}
