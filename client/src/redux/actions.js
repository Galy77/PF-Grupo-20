import { ADD_ORDER, ADD_PRODUCT,ADD_USER,REMOVE_ORDER,REMOVE_USER,REMOVE_PRODUCT, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER } from "./actionTypes";

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
export const addProduct = (product) => {

   return async(dispatch) => {
     try {
        return dispatch({
           type: ADD_PRODUCT,
           payload: product,
        })
     } catch (error) {
        console.log(error.message)
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