import { Route, Routes } from "react-router";
import './App.css';
import Profile from "./Components/Profile/Profile";
import Home from "./Pages/Home/Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}  ></Route>
      <Route path="/profile/:id" element={<Profile />}  ></Route>
    </Routes>
  )
}

export default App
