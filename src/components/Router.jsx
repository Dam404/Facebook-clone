import React from "react";
import {
  BrowserRouter as Router,
  Route,
Routes,
  Navigate,
} from "react-router-dom";
import Signup from "../Signup/Signup";
import LoginPage from "./LoginPage/LoginPage";
import { auth } from "../firebase";

function AppRouter() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
          <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}
export default AppRouter;
