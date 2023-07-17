/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions"
import { auth } from "../firebase";

const authContext = createContext({
  user: null,
  logout: () => {},
  loading: true,
  loginWithGoogle: () => {},
  resetPassword: () => {},
});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const loginWithGoogle = async () => {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);

      const { user } = result;
      const { displayName, email, accessToken } = user;
        
      console.log("Usuario creado con Google");
      console.log("Nombre:", displayName);
      console.log("Email:", email);
      console.log("Token:", accessToken);
      
      //const response = dispatch(getUser(email))
      //if(response){
       // return true;
      //}
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
        userFr:user,
        logout,
        loading,
        loginWithGoogle,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
