import { ADD_ORDER, ADD_PRODUCT,ADD_USER,REMOVE_ORDER,REMOVE_USER,REMOVE_PRODUCT,GET_ALL_CATEGORIES, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER, GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, ALPHABETIC_ORDER, PRICE_ORDER } from "./actionTypes";
import axios from "axios";

/////USER//////
export const addUser = (user) => {
    return async(dispatch) => {
      try {
         return dispatch({
            type: ADD_USER,
            payload: user
         })
      } catch (error) {
         console.log(error.message)
      }
    };
}

export const removeUser = (payload) => {
    return async (dispatch) => {
      try {
         return dispatch({
             type: REMOVE_USER,
             payload
         });
      } catch (error) {
         console.log(error.message);
      }
    };
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

/////ALPHABETIC FILTER/////

export const alphabeticOrder = (payload) => {
   return {
      type: ALPHABETIC_ORDER,
      payload
   }
}

/////PRICE ORDER/////

export const priceOrder = (payload) => {
   return {
      type: PRICE_ORDER,
      payload
   }
}

/////GET ALLS/////
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

export const getAllProducts = () => {
   return async function(dispatch){
      try {
         const response = await axios.get("http://localhost:3001/PF/products");
         return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
         })
      } catch (error) {
         console.log(error.message);
      }
   }
}

export const getProductById = (id) => {
   return async function(dispatch){
      try {
         const response = await axios.get(`http://localhost:3001/PF/products/${id}`);
         console.log(response.data)
         return dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: response.data
         })
      } catch (error) {
         console.log(error.message)
      }
   }
}