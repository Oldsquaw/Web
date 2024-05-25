import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCwwzY3QbWQJCoTeYufQXTD5r2hlEBNzG4",
    authDomain: "oldsquaw-7cd31.firebaseapp.com",
    databaseURL: "https://oldsquaw-7cd31-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "oldsquaw-7cd31",
    storageBucket: "oldsquaw-7cd31.appspot.com",
    messagingSenderId: "375141550944",
    appId: "1:375141550944:web:d0cf059ac17443aba36c05",
    measurementId: "G-W5X9J02SZ7"
};

export const firebaseApp = initializeApp(firebaseConfig)
