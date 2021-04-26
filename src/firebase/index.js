import * as firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp({
    
        apiKey: "AIzaSyC5UW-aVFFIGiZv2xHYgOeCMTcXOfaDQxQ",
        authDomain: "ecommerce-coder-5be11.firebaseapp.com",
        projectId: "ecommerce-coder-5be11",
        storageBucket: "ecommerce-coder-5be11.appspot.com",
        messagingSenderId: "692709882819",
        appId: "1:692709882819:web:8189b18e7c7055d5111b76"
     
})

export const getFirebase = () =>{
    return app
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}