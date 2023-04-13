import React from "react";
import './Footer.css';
import Sociales from './sociales/sociales';
import Mapa from './mapa/mapa';

const Footer = () => {
    return (
        <footer>
            {/* <h3>Footer</h3> */}
            <div className="cnt-footer">
            <Sociales></Sociales>
            <Mapa></Mapa>
            </div>
        </footer>
    )
}
export default Footer;