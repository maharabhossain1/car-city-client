import initializeAuthentication from "../Components/Loging/Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

// fire base App
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  // Registration
  const registerUser = (email, password, name, location, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const desti = location?.state?.form || "/";
        history.replace(desti);
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        ////save to data base
        saveUser(email, name);
        // set name into firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsloading(false));
  };
  // Log IN user
  const logIn = (email, password, location, history) => {
    setIsloading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const desti = location?.state?.form || "/";
        history.replace(desti);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ...
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unSubscribe;
  }, []);

  // Log Out
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsloading(false));
  };

  // save user Data
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    isLoading,
    registerUser,
    logOut,
    logIn,
    authError,
  };
};
export default useFirebase;
