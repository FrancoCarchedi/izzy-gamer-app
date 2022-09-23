import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


// Configuracion Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApMJgh6_xAfdntwVm8ryi4r3WXaTumfy0",
  authDomain: "izzygamer-2cb97.firebaseapp.com",
  projectId: "izzygamer-2cb97",
  storageBucket: "izzygamer-2cb97.appspot.com",
  messagingSenderId: "154572074159",
  appId: "1:154572074159:web:4d04c845832042a1f1b85a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
