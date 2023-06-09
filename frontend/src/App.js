import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.userReducer.user);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />}/>
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
        <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
