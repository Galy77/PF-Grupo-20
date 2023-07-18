import { 
   GET_FIREBASEUSER,
   ADD_ORDER, 
   ADD_PRODUCT,
   ADD_USER,
   ADD_FIREBASEUSER,
   REMOVE_ORDER,
   REMOVE_PRODUCT,
   GET_ALL_CATEGORIES, 
   MINIMUM_PRICE, 
   MAXIMUM_PRICE, 
   BETTER_QUALIFIED_FILTER, 
   ALL_FILTER,
   GET_USER, 
   LOGOUT_USER
} from "./actionTypes";
import axios from "axios";

/////USER//////
export const getUser = (user) => {
   return async (dispatch) => {
     try {
       const response = await axios.get(`http://localhost:3001/PF/user/bdd?email=${user.email}&password=${user.password}`);
       console.log("respuesta redux usuario encontrado", response.data);
       return dispatch({
         type: GET_USER,
         payload: response.data,
       });
     } catch (error) {
       console.log("Error al obtener el usuario: ", error.message);
       throw error;
     }
   };
}

export const getFirebaseUser = (email) => {
   return async (dispatch) => {
      try {
         const response = await axios.post('http://localhost:3001/PF/user/firebase', { email: email });
         return dispatch({
            type: GET_FIREBASEUSER,
            payload: response.data
         });
      } catch (error) {
         console.log("Error al traer el usuario: ", error.message);
      }
   };
};

export const addUser = (user) => {
    return async(dispatch) => {
      try {
         const response = await axios.post('http://localhost:3001/PF/user', user)
            dispatch({
               type: ADD_USER,
               payload:response.data
            })
         return response;
      } catch (error) {
         console.log("Error al crear el usuario", error.message)
      }
    };
}
export const addFirebaseUser = (user) => {
   return async(dispatch) => {
     try {
        const response = await axios.post('http://localhost:3001/PF/user/firebase', user)
           dispatch({
              type: ADD_FIREBASEUSER,
              payload:response.data
           })
        return response;
     } catch (error) {
        console.log("Error al crear el usuario", error.message)
     }
   };
}

export const userLogout = () => {
   return {
      type: LOGOUT_USER,
      payload:{},
   }
}

/////PRODUCTS//////
export function addProduct(productData) {
   return async function(dispatch) {
     try {
       const formData = new FormData();
       formData.append('name', productData.name);
       formData.append('description', productData.description);
       formData.append('price', productData.price);
       formData.append('CategoryId', productData.CategoryId);
       formData.append('stock', productData.stock);
       formData.append('rating', productData.rating);
       formData.append('image', productData.image); 
 
       const response = await axios.post('http://localhost:3001/PF/products', formData, {
         headers: {
           'Content-Type': 'multipart/form-data', 
         },
       });
 
       dispatch({
         type: ADD_PRODUCT,
         payload: response.data,
       });
 
       return response;
     } catch (error) {
       alert(error);
     }
   };
 }


export const removeProduct = (id) => {
   return async (dispatch) => {
     try {
        return dispatch({
            type: REMOVE_PRODUCT,
            payload:id
        });
     } catch (error) {
        console.log(error.message);
     }

   };
   
}
/////ORDERS//////
export const addOrder = (order) => {

    return async(dispatch) => {
      try {
         return dispatch({
            type: ADD_ORDER,
            payload: order,
         })
      } catch (error) {
         console.log(error.message)
      }
    };
}

export const removeOrder = (id) => {
    return async (dispatch) => {
      try {
         return dispatch({
             type: REMOVE_ORDER,
             payload:id
         });
      } catch (error) {
         console.log(error.message);
      }

    };   
}

/////MAX AND MIN PRICES/////

export const minimumPrice = (min) => {
   return {
      type: MINIMUM_PRICE,
      payload: min
   }
}

export const maximumPrice = (max) => {
   return {
      type: MAXIMUM_PRICE,
      payload: max
   }
}

/////RATING FILTER/////

export const betterQualified = (payload) => {
   return {
      type: BETTER_QUALIFIED_FILTER,
      payload
   }
}

export const showAll = (payload) => {
   return {
      type: ALL_FILTER,
      payload
   }
}

//---->Categories
export const getAllCategories = () => {
   return async function(dispatch){
      try{
         const response = await axios.get("http://localhost:3001/PF");
         return dispatch({
             type:GET_ALL_CATEGORIES,
             payload:response.data
         })
      }catch(error){
         alert(error.menssage);
      }
   }
}