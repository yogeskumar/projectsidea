// import { initializeApp } from "firebase/app";
// import {
//     GoogleAuthProvider,
//     getAuth,
//     signInWithPopup,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     sendPasswordResetEmail,
//     signOut,
// } from "firebase/auth";
// import {
//     getFirestore,
//     query,
//     getDocs,
//     collection,
//     where,
//     addDoc,
// } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyCWSM_bQ8wrrNPZBsUC7oPTO1QPhtM0F3E",
//     authDomain: "projectsidea-5ac2a.firebaseapp.com",
//     projectId: "projectsidea-5ac2a",
//     storageBucket: "projectsidea-5ac2a.appspot.com",
//     messagingSenderId: "423997691537",
//     appId: "1:423997691537:web:5752fe3113aefaff7a1130",
//     measurementId: "G-LCZGXRHQ1M"
//   };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//     try {
//         const res = await signInWithPopup(auth, googleProvider);
//         const user = res.user;
//         const q = query(collection(db, "users"), where("uid", "==", user.uid));
//         const docs = await getDocs(q);
//         if (docs.docs.length === 0) {
//             await addDoc(collection(db, "users"), {
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "google",
//                 email: user.email,
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const logInWithEmailAndPassword = async (email, password) => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password);
//         const user = res.user;
//         await addDoc(collection(db, "users"), {
//             uid: user.uid,
//             name,
//             authProvider: "local",
//             email,
//         });
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const sendPasswordReset = async (email) => {
//     try {
//         await sendPasswordResetEmail(auth, email);
//         alert("Password reset link sent!");
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const logout = () => {
//     signOut(auth);
// };
// export {
//     auth,
//     db,
//     signInWithGoogle,
//     logInWithEmailAndPassword,
//     registerWithEmailAndPassword,
//     sendPasswordReset,
//     logout,
// };

import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "projectsidea-5ac2a.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-LCZGXRHQ1M"
  });

// Create the Global Data Context
export const GlobalDataContext = createContext();
export const GlobalIdContext = createContext();

// Create the Global Data Provider component
export const GlobalDataProvider = ({ children }) => {
  const [completeProjectsData, setCompleteProjectsData] = useState([]);
  const [id, setId] = useState('xyz');

  useEffect(() => {
    const fetchCompleteProjectsData = async () => {
      try {
        const db = firebase.firestore();
        const collectionRef = db.collection('completeprojectsdata');
        const snapshot = await collectionRef.get();

        const data = snapshot.docs.map(doc => doc.data());

        setCompleteProjectsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCompleteProjectsData();
  }, []);

  return (
    <GlobalDataContext.Provider value={{ completeProjectsData, id, setId }}>
      {/* <GlobalIdContext.Provider value={{id, setId}}> */}
        {children}
        {/* </GlobalIdContext.Provider> */}
    </GlobalDataContext.Provider>
  );
};
