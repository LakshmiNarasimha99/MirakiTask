import Home from "./components/home/home";
import Login from "./components/login/login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
function App() {
  return (

    <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
