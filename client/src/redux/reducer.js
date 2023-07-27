/* eslint-disable no-case-declarations */

// import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER } from "./actionTypes"

// const initialState = {
//     user:{},
//     categories: [{name: "Muebles", img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg"},

// /* eslint-disable no-case-declarations */
// /*
//   categories: [{name: "Muebles", img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg"},
//      {name: "Tecnología", img: "https://pcacademia.com/wp-content/uploads/2019/09/precios-de-computadoras.jpg"}, 
//      {name: "Electrodomesticos", img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x"}, 
//      {name: "Moda", img: "https://audaces.com/wp-content/uploads/2022/05/estilos-de-moda-qual-o-seu-scaled.jpg"}, 
//      {name: "Alimento y bebidas", img: "https://thefoodtech.com/wp-content/uploads/2022/05/alimentos-funcionales-principal.jpg"},
//      {name: "Construcción", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhlsHISi9oUcOsHFc4milaQ3kTV7PtxtmQQ&usqp=CAU"}, 
//      {name: "Hobbies", img: "https://www.reed.co.uk/career-advice/wp-content/uploads/sites/6/2016/06/career-advice-article-header-should-i-include-hobbies-and-interests-in-my-cv.jpg"},
//      {name: "Joyeria", img: "https://img.freepik.com/foto-gratis/joyas-oro-gemas-escaparate_1398-4327.jpg?w=2000"}],
//      carouselPhotos: [{img: "https://www.native-instruments.com/typo3temp/pics/img-welcome-hero-guitar-rig-6-player-product-page-01-hero-v2-8c04bb712c562230a837e56511c10f1d-m@2x.jpg", description: "Algun texto descriptivo"},
//      {img: "https://assetsio.reedpopcdn.com/g502x_f9QuuM8.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Algun texto descriptivo"},
//      {img: "https://images.ecestaticos.com/oycpBwJcX7i-r9GCd1vztzplwCQ=/0x0:1800x1350/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbfd%2F097%2Fcc7%2Fbfd097cc74485783a690289860e14759.jpg", description: "Algun texto descriptivo"},
//      {img: "https://www.cleanipedia.com/images/iohqr4whhl17/7fvPOEi6Aros2m9Qxdo1De/757a393ca1569b66eff2f27d8f5bfe45/U2NyZWVuc2hvdF8yLnBuZw/944w-629h/lavarropas-de-color-blanco-sobre-un-piso-gris.jpg", description: "Algun texto descriptivo"}
//     ],
// */

import { 
  GET_USER,
  ADD_USER,
  ADD_FIREBASEUSER,
  LOGOUT_USER,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_ORDER,
  REMOVE_ORDER,
  GET_ALL_CATEGORIES, 
  MINIMUM_PRICE, 
  MAXIMUM_PRICE, 
  BETTER_QUALIFIED_FILTER,
  ALL_FILTER,
  GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID,
  ALPHABETIC_ORDER, PRICE_ORDER,
  MODIFY_USER,
  MODIFY_FIREBASE_USER,
  MODIFY_USER_PHOTO,
  GET_PAYMENTS_BY_ID
} from "./actionTypes"

const initialState = {
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
    user:{},
    detailProduct: [],
    lettersOrder: "A-Z",
    priceOrder: "",
    payments:[],
    productsArray:[]
}

export const reducer = (state = initialState,{type,payload})=>{
    switch (type) {
        //USER
        case GET_USER: {
            localStorage.setItem("usuarioActual", JSON.stringify(payload));
            localStorage.setItem("userProvider","local")
            return {
              ...state,
              user: payload,
            };
          }

        case ADD_USER:
        const auxUser = () => {
          const userX = localStorage.setItem("usuarioActual", JSON.stringify(payload));
          localStorage.setItem("userProvider","local")
          return userX;
        }
        const actUser = state.user
        console.log("este es mi usuario actual",actUser)
        return{
          ...state,
          user:auxUser()
        }
        case ADD_FIREBASEUSER:
         // Instead of using a separate function, update the local storage directly
          localStorage.setItem("usuarioActual", JSON.stringify(payload));
          localStorage.setItem("userProvider", "google");
          console.log("ya se agrego  el user");

          // Since Redux reducers should be pure functions, avoid modifying local storage here
          // Instead, return the updated state with the new user payload
          return {
            ...state,
            user: payload,
          };
       
        case LOGOUT_USER:
          localStorage.removeItem("usuarioActual");
          localStorage.removeItem("userProvider");
            return{
                ...state,
                user: payload
            }

        case MODIFY_USER:
            return{
              ...state,
              user: payload
            }
        case MODIFY_USER_PHOTO:
            return{
              ...state,
              user_photo:payload,
              user: {
                ...state.user, payload
              }
            }
            
        case MODIFY_FIREBASE_USER:
            return{
              ...state,
              user: payload
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
          case GET_PAYMENTS_BY_ID:
            return{
              ...state,
              payments:payload
          }
            
        case GET_ALL_PRODUCTS:
          return{
            ...state,
            products: payload
          }
        
        case GET_PRODUCT_BY_ID:
          return{
            ...state,
            detailProduct: payload,
            productsArray:{
              ...state.detailProduct,
              payload
            }
          }

        case ALPHABETIC_ORDER:
          return{
            ...state,
            lettersOrder: payload,
            priceOrder: ""
          }

        case PRICE_ORDER:
          return{
            ...state,
            priceOrder: payload,
            lettersOrder: ""
          }

        default:
            return{
                ...state
            }
            
    }
}