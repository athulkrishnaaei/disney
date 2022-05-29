import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import {  collection, getDocs } from 'firebase/firestore/lite';
import { useState } from "react";
//import firebase from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyCuGbb2xiWTwxWycOi4mKj0gsW9W0FqcqY",
    authDomain: "disney-clone-plusplus.firebaseapp.com",
    projectId: "disney-clone-plusplus",
    storageBucket: "disney-clone-plusplus.appspot.com",
    messagingSenderId: "56869448725",
    appId: "1:56869448725:web:c9cf634cb4278f0e23f21c",
    measurementId: "G-FTLDG5XY7Y"
  };

  const app =initializeApp(firebaseConfig);
 // const db =firestore(firebaseConfig);
  const db = getFirestore(app);
  const auth =getAuth(app);
  const provider =  new GoogleAuthProvider(app);
  const storage =getStorage(app);

  async function getCities(db) {
    const citiesCol = collection(db, 'movies');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log("movies",cityList)
   // setMovies(cityList);
  }

  // console.log("movies",movies);
  export {auth,provider,storage};
  export default db;