import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { app } from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ app }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </FirebaseContext.Provider>, 
    document.getElementById("root")
);
