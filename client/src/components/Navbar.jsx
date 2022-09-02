import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";



const Navbar = () => {
  return (
    <div id="navbar">
        
        <ul id="navbar-ul">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
        </ul>

        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/blogs" element={<Blogs/>}/>
            <Route  path="*" element={<NotFound/>}/>
        </Routes>



    </div>
  )
}

export default Navbar