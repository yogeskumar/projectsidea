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
