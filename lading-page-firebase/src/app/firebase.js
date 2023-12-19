// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage , ref , uploadBytes , getDownloadURL , getBytes} from "firebase/storage";
import { getFirestore , collection , addDoc , getDoc , 
  doc , getDocs ,query , where, setDoc , deleteDoc , docId } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBa5m9hvhvWVCeWhsQAKDf478FsUxCpMg",
  authDomain: "ladingpage-firebase.firebaseapp.com",
  projectId: "ladingpage-firebase",
  storageBucket: "ladingpage-firebase.appspot.com",
  messagingSenderId: "197705559038",
  appId: "1:197705559038:web:24a44704f4961174f26eaf",
  measurementId: "G-8L3FGL9D3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export async function addUser (user){
    try{
        const docRef = collection(db , "users");
        const res = await addDoc(docRef, user);
        console.log("Respuesa de addDoc en firebase fue " , res);



    }catch(error){
        console.log("Hubo un error en funcion firebase.js addUser" , error)
    }

}