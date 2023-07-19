import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER,GET_ALL_CATEGORIES, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER, GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID} from "./actionTypes"

const initialState = {
    user:{},
    categories:[],  
    products: [],
      carouselPhotos: [{img: "https://www.native-instruments.com/typo3temp/pics/img-welcome-hero-guitar-rig-6-player-product-page-01-hero-v2-8c04bb712c562230a837e56511c10f1d-m@2x.jpg", description: "Algun texto descriptivo"},
      {img: "https://assetsio.reedpopcdn.com/g502x_f9QuuM8.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Algun texto descriptivo"},
      {img: "https://images.ecestaticos.com/oycpBwJcX7i-r9GCd1vztzplwCQ=/0x0:1800x1350/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbfd%2F097%2Fcc7%2Fbfd097cc74485783a690289860e14759.jpg", description: "Algun texto descriptivo"},
      {img: "https://www.cleanipedia.com/images/iohqr4whhl17/7fvPOEi6Aros2m9Qxdo1De/757a393ca1569b66eff2f27d8f5bfe45/U2NyZWVuc2hvdF8yLnBuZw/944w-629h/lavarropas-de-color-blanco-sobre-un-piso-gris.jpg", description: "Algun texto descriptivo"}
     ],
    orders:[],
    minimumPrice: "",
    maximumPrice: "",
    ratingFilterValue: "all",
    detailProduct: []
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
          const aux = ()=>{
            if(state.orders.length){

            const match = state.orders.filter(el => el.id == payload.id)
            const unmatch = state.orders.filter(el => el.id !== payload.id)

            if(match.length){

              let productos = [...unmatch,...match.map(el =>{
                return{
                ...el,
                cant:el.cant + 1
                }})]

              localStorage.setItem("productos",JSON.stringify(productos))

              return productos
            }else{
              let productos = [...state.orders,payload]
              localStorage.setItem("productos",JSON.stringify(productos))
              return productos
            }

            }else{
              let productos = [payload]
              localStorage.setItem("productos",JSON.stringify(productos))
              return productos
            }
          }
          return{
              ...state,
              orders: aux()
          }
            
        case REMOVE_ORDER:
            const aux1 = () => {
              let productos = state.orders.filter(el => el.id !== payload)
              localStorage.setItem("productos",JSON.stringify(productos))
              return productos
            }
            return{
                ...state,
                orders: aux1()
            }
        
        case MINIMUM_PRICE:
          return {
            ...state,
            minimumPrice: payload
          }

        case MAXIMUM_PRICE:
          return {
            ...state,
            maximumPrice: payload
          }

        case BETTER_QUALIFIED_FILTER:
          return {
              ...state,
              ratingFilterValue: payload
          }

        case ALL_FILTER:
          return {
            ...state,
            ratingFilterValue: payload
          }

            
          case GET_ALL_CATEGORIES:
            return{
              ...state,
              categories:payload
            }
            
        case GET_ALL_PRODUCTS:
          return{
            ...state,
            products: payload
          }
        
        case GET_PRODUCT_BY_ID:
          return{
            ...state,
            detailProduct: payload
          }

        default:
            return{
                ...state
            }
            
    }
}