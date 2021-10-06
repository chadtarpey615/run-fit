import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route path="/" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/home" component={HomeScreen} />
      </div>
    </Router>

  );
}

export default App;
