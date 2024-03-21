import React from 'react'
import style from './Footer.module.css'
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../Assets/logo5.png"
import { Link, NavLink, useNavigate } from "react-router-dom";
const Footer = () => {
    return (
          <div className={style.footerp}>
          <div className={style.container}>
           <Link to='/'className={style.link}><img src={logo} height={80} alt=" Logo" /></Link>
            <nav>
                <ul className={style.list}>
                    <Link  to='/meals' className={style.link}  ><li>Meals</li></Link>
                    <Link to='/cook' className={style.link}><li>Cooks </li></Link>
                    <Link to='/contact' className={style.link} ><li>Contact Us</li></Link>
                    <Link to='about' className={style.link} ><li>About Us</li></Link>
                </ul>
            </nav>
            </div>
            <div className={style.bottom}>
            <p className={style.copyright}>© 2024 All rights reserved</p>
            <div className={style.socials}>
                <Link to="www.facebook.com" className={`${style.socialIcon}`}>
                  <FacebookRoundedIcon />
                </Link>
                <Link to="www.Instagram.com" className={`${style.socialIcon}`}>
                  <InstagramIcon />
                </Link>
                <Link to="" className={`${style.socialIcon}`}>
                  <WhatsAppIcon />
                </Link>
              </div>
        </div>
        </div>
    )
}

export default Footer