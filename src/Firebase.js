import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbdsmGgIKpT9rdVHDDx8u5E8PRUBpPCAw",
  authDomain: "av1b2-f63f8.firebaseapp.com",
  projectId: "av1b2-f63f8",
  storageBucket: "av1b2-f63f8.appspot.com",
  messagingSenderId: "827612382210",
  appId: "1:827612382210:web:599211d97e84f9095b531b"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
  export {db}