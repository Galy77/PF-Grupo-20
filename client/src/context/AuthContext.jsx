/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("userProvider", "google");
    const { user } = result;
    setUser(user);
    return user;
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
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
