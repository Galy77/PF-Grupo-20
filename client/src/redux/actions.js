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
   LOGOUT_USER,
   GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID,
   ALPHABETIC_ORDER, PRICE_ORDER,
   MODIFY_USER,
   MODIFY_FIREBASE_USER,
   MODIFY_USER_PHOTO
} from "./actionTypes";


import axios from "axios";

/////USER//////
export const getUser = (user) => {
   return async (dispatch) => {
     try {
       const response = await axios.get(
         ` http://localhost:3001/pf/user/bdd?email=${user.email}&password=${user.password}`
       );
       const payload = response.data;
       localStorage.setItem("usuarioActual", JSON.stringify(payload));
       localStorage.setItem("userProvider","local");
       dispatch({
         type: GET_USER,
         payload: payload,
       });
     } catch (error) {
       console.log("Error al obtener el usuario: ", error.message);
       throw error;
     }
   };
 };
 
export const getFirebaseUser = (email) => {
   return async (dispatch) => {
      try {
         const response = await axios.post(' http://localhost:3001/pf/user/firebase', { email: email });
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
         const response = await axios.post(' http://localhost:3001/pf/user', user)
            dispatch({
               type: ADD_USER,
               payload:response.data
            })
         return response;
      } catch (error) {
         console.log("Error al crear el usuario", error)
      }
    };
}
export const addFirebaseUser = (user) => {
   return async(dispatch) => {
     try {
        const response = await axios.post(' http://localhost:3001/pf/user/firebase', user)
      //   const localResponse = await axios.post(' http://localhost:3001/pf/user', user);
           dispatch({
              type: ADD_FIREBASEUSER,
              payload:response.data
           })
        return response;
     } catch (error) {
        return error.message;
     }
   };
}
export const modifyUser=(user)=>{
   return async(dispatch) => {
      try {
         const response = await axios.put(`http://localhost:3001/PF/user/${user.id}`, user)
         const payload = response.data;

         localStorage.removeItem("usuarioActual");
         localStorage.setItem("usuarioActual", JSON.stringify(payload));

         dispatch({
            type: MODIFY_USER,
            payload:response.data
         })
            
         return response;

      } catch (error) {
         console.log("Error al modificar el usuario", error.message);
      }
    };
}
export const modifyUserPhoto=(user)=>{
   return async(dispatch) => {
      try {
         const formData = new FormData();
         formData.append('image', user.image);
         const response = await axios.put(`http://localhost:3001/PF/user/${user.id}`, formData, {
            headers: {
               'Content-Type': 'multipart/form-data', 
            },
         });
         const payload = response.data;

         localStorage.removeItem("usuarioActual");
         localStorage.setItem("usuarioActual", JSON.stringify(payload));

         dispatch({
            type: MODIFY_USER_PHOTO,
            payload:response.data
         })
            
         return response;

      } catch (error) {
         console.log("Error al modificar el usuario", error.message);
      }
    };
}
export const modifyFirebaseUser = (user) => {
  return async (dispatch) => {
    try {
      console.log("datos enviados", user);
      const response = await axios.put(`http://localhost:3001/PF/firebase/${user.id}`, user);

      const payload = response.data;
      localStorage.removeItem("usuarioActual");
      localStorage.setItem("usuarioActual", JSON.stringify(payload));

      dispatch({
        type: MODIFY_FIREBASE_USER,
        payload: response.data,
      });

      return response;
    } catch (error) {
      console.log("Error al modificar el usuario", error.message);
      throw error;
    }
  };
};



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

 
       const response = await axios.post('https://api-market-henry-jczt.onrender.com/PF/products', formData, {

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
         const response = await axios.get(" http://localhost:3001/pf/");
         return dispatch({
             type:GET_ALL_CATEGORIES,
             payload:response.data
         })
      }catch(error){
         console.log(error.menssage);
      }
   }
}

export const getAllProducts = () => {
   return async function(dispatch){
      try {
         const response = await axios.get(" http://localhost:3001/pf/products");
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
         const response = await axios.get(` http://localhost:3001/pf/products/${id}`);
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