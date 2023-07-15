import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCWSM_bQ8wrrNPZBsUC7oPTO1QPhtM0F3E",
    authDomain: "projectsidea-5ac2a.firebaseapp.com",
    projectId: "projectsidea-5ac2a",
    storageBucket: "projectsidea-5ac2a.appspot.com",
    messagingSenderId: "423997691537",
    appId: "1:423997691537:web:5752fe3113aefaff7a1130",
    measurementId: "G-LCZGXRHQ1M"
  });

// Create the Global Data Context
export const GlobalProjectsContext = createContext();

// Create the Global Data Provider component
export const GlobalProjectsProvider = ({ children }) => {
  const [completeProjectsData, setCompleteProjectsData] = useState([]);

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
    <GlobalProjectsContext.Provider value={{ completeProjectsData, setCompleteProjectsData }}>
      {/* <GlobalProjectsContext.Provider value={{id, setId}}> */}
        {children}
        {/* </GlobalProjectsContext.Provider> */}
    </GlobalProjectsContext.Provider>
  );
};
