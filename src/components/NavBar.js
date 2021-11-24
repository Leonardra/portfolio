import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import "./NavBar.css"
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import {DarkMode} from "@mui/icons-material";
import Hero from "./hero";
import Project from "./Project";
import Home from "./Home";

class NavBar extends Component {
    render() {
        return (

            <Router>
                <nav className="navItem">
                    <h1 className="nav-logo">Oluwatobi</h1>

                    <DarkMode/>
                    <div className="nav-menu">
                        {MenuItems.map((item, index) =>{
                            return (
                                <p key={index}>
                                    <Link className= {item.className} to={item.url}>
                                        {item.title}
                                    </Link>
                                </p>
                            )
                        })}
                        <button className="nav-button">Hire me</button>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Project/>}/>
                </Routes>
            </Router>

        );
    }
}

export default NavBar;