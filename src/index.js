import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { db } from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ db }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </FirebaseContext.Provider>, 
    document.getElementById("root")
);
