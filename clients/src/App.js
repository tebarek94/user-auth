import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isRegistered ? (
              <Navigate to="/login" replace />
            ) : (
              <Registration setIsRegistered={setIsRegistered} />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
