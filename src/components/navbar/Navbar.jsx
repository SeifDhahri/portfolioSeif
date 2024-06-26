import React from 'react';
import logo from '../../img/logo.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';



export default function Navbar() {     
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
         <div className="container">

            <Link smooth={true} to='home'  className="navbar-brand" href="#"><img className="logo" style={{ width: '170px', height: '100px' }} src={logo} alt="Logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <Link smooth={true} to='home'  className="nav-link" href="#">home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                     <Link smooth={true} to='about' offset={-110} className="nav-link" href="#">about</Link>
                  </li>
                  <li className="nav-item">
                     <Link smooth={true} to='services' offset={-110} className="nav-link" href="#">services</Link>
                  </li>
                  <li className="nav-item">
                     <Link smooth={true} to='experience' offset={-110} className="nav-link" href="#">experience</Link>
                  </li>
                  <li className="nav-item">
                     <Link smooth={true} to='portfolio' offset={-110} className="nav-link" href="#">portfolio</Link>
                  </li>

                  <li className="nav-item">
                     <Link smooth={true} to='contact' offset={-110} className="nav-link" href="#">contact</Link>
                  </li>

               </ul>

            </div>

         </div>
      </nav>
   );
};
