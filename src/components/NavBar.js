import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
           <nav className="navItem">
               <h1 className="nav-logo">Oluwatobi</h1>
               <div className="nav-menu">
                   {MenuItems.map((item, index) =>{
                    return (
                        <p key={index}>
                            <a className= {item.className} href={item.url}>
                                {item.title}
                            </a>
                        </p>
                    )
                   })}
               </div>
           </nav>
        );
    }
}

export default NavBar;