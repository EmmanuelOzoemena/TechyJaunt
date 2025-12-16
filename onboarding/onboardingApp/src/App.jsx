import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
