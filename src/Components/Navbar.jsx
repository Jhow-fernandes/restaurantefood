import React, {useState} from 'react';
import {Link} from 'react-scroll';
import Logo from '../images/logo1.png';

function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if(window.screenY >= 50){
            setNav(true);
        } else{
            setNav(false);
        };
    };

    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className="logo" smooth={true} duration={2000}>
                <img src={Logo} alt="" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="header" smooth={true} duration={2000}>Inicio</Link></li>
                <li><Link to="products" smooth={true} duration={2000}>Produtos</Link></li>
                <li><Link to="about" smooth={true} duration={2000}>Sobre</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
