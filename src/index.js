import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBshxjM3M2Mu7C5wjnXAcmlXJb7AgfRke8",
  authDomain: "tienda-coder-react-mariano.firebaseapp.com",
  projectId: "tienda-coder-react-mariano",
  storageBucket: "tienda-coder-react-mariano.appspot.com",
  messagingSenderId: "9058563195",
  appId: "1:9058563195:web:d5d25970a6715fa1409ede"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
