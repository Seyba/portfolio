import React from 'react'
import ReactDOM from "react-dom/client"
import { Footer } from './components/Footer'
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-gray-100	">  
    <React.StrictMode>
      <Router>
        <Navbar/>
        <App />
        <Footer />
      </Router>
    </React.StrictMode>
  </div>
);
