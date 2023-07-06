import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER} from "./actionTypes"

const initialState = {
    user:{},
    categories: [{name: "Muebles", img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg"},
     {name: "Tecnología", img: "https://pcacademia.com/wp-content/uploads/2019/09/precios-de-computadoras.jpg"}, 
     {name: "Electrodomesticos", img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x"}, 
     {name: "Moda", img: "https://audaces.com/wp-content/uploads/2022/05/estilos-de-moda-qual-o-seu-scaled.jpg"}, 
     {name: "Alimento y bebidas", img: "https://thefoodtech.com/wp-content/uploads/2022/05/alimentos-funcionales-principal.jpg"},
     {name: "Construcción", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhlsHISi9oUcOsHFc4milaQ3kTV7PtxtmQQ&usqp=CAU"}, 
     {name: "Hobbies", img: "https://www.reed.co.uk/career-advice/wp-content/uploads/sites/6/2016/06/career-advice-article-header-should-i-include-hobbies-and-interests-in-my-cv.jpg"},
     {name: "Joyeria", img: "https://img.freepik.com/foto-gratis/joyas-oro-gemas-escaparate_1398-4327.jpg?w=2000"}],
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
