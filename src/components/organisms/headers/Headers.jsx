import React, {useState, useEffect} from 'react'
import {SlMenu} from "react-icons/sl"
import {VscChromeClose} from "react-icons/vsc"
import { useNavigate, useLocation } from 'react-router-dom'
import './style.scss'

import ContentWrapper from '../contentWrapper/ContentWrapper'
import logo from '../../../assets/bri-movie-logo.svg'


const Headers = () => {
    const [show,setShow] = useState("top")
  return (
    <header className='header'>
        <ContentWrapper>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <ul className="menuItems">
                <li className="menuItem">Movies</li>
                <li className="menuItem">TV Show</li>
                <li className="menuItem">Login</li>
            </ul>
        </ContentWrapper>
    </header>
  )
}

export default Headers