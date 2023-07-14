/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, getUser } from "../redux/actions"
import { auth } from "../firebase";

const authContext = createContext({
  signup: () => {},
  login: () => {},
  user: null,
  logout: () => {},
  loading: true,
  loginWithGoogle: () => {},
  resetPassword: () => {},
  phoneNumber: null, 
});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  //const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const signup = async (email, password, name, phoneNumber, direction_shipping) => {
    /*
    const bddUser = {
      name:name, 
      email:email, 
      password:password, 
      phone:phoneNumber, 
      direction_shipping:direction_shipping
    }
    console.log(bddUser)
    */
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName: name,
      }); 
      /*  
      await dispatch(addUser(bddUser))
      .then((response)=>{
        if(response){
          alert("user creado en la bdd");
        }
      })
      */
      console.log('Usuario registrado exitosamente', user);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  const login = async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;
      const { displayName, email } = user;
      /*
      const response = dispatch(getUser(email))
      if(response){
        return true;
      }*/
      console.log("Usuario creado con Google");
      console.log("Nombre:", displayName);
      console.log("Email:", email);
     
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
