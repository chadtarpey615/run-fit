import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"
import CalendarScreen from "./screens/CalendarScreen"
import Events from "./screens/Events"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/calendar" component={CalendarScreen} />
        <Route path="/all-events" component={Events} />
        <Route path="/" component={HomeScreen} exact />
      </div>
    </Router>

  );
}

export default App;
