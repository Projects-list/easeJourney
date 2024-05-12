import React,{useState, useEffect} from "react"
import './Css/navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiArrowDown, FiUsers } from "react-icons/fi"
import {Booking, Transports} from "./Dropdown"

const Navbar =()=>{

    const [Show, setShow] = useState(false)
    const [theme, settheme] = useState("light-theme")
    const [name, setname] = useState(<FiMoon size={20} />)
    const [click, setClick] = useState(false);
    const [booking, setBooking] = useState(false);
    const [trasnport, settransport] = useState(false);
  
    const handleClicks = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    
     const onMouseEnter1 = () => {
        if (window.innerWidth < 960) {
          settransport(false);
         
        } else {
          settransport(true);
         
        }
      };
    
      const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
          settransport(false);
         
        } else {
          settransport(false);
         
        }
      };
     const onMouseEnterBooking = () => {
        if (window.innerWidth < 960) {
          setBooking(false);
         
        } else {
          setBooking(true);
         
        }
      };
    
      const onMouseLeaveBooking = () => {
        if (window.innerWidth < 960) {
          setBooking(false);
         
        } else {
          setBooking(false);
         
        }
      };
    const toggledark = () => {
        theme === "dark-theme" ? settheme("light-theme") : settheme("dark-theme")
        theme === "dark-theme" ? setname(<FiMoon size={20} />) : setname(<FiSun size={20} />)

    }
    useEffect (() => {
        document.body.className = theme
    }, [theme])

    const handleClick=()=>{
        setShow(!Show)
    }
    return(
        <nav className='NavbarItems'>
            <h1 className='logo'>
            Ease Journey  <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png' alt='' /><i className='fab fa-react'></i>
                </h1>
               
            <div className='menuicons' onClick={handleClick}><i>{Show ? <FiX size={20}/>: <FiMenu size={20}/>}</i></div>
            <ul className={Show ? "navmenu active":"navmenu"}>
                <li>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    <i className='fas fa-caret-down' ><FiHome size={20}/></i>
              Home
            </Link>
                </li>
                {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              NearBy <i className='fas fa-caret-down' ><FiArrowDown size={15}/></i>
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
          <li>
                    <Link to='/travel' rel="noreferrer" className='nav-links' onClick={closeMobileMenu}>
                    <i className='fas fa-caret-down' ><FiUsers size={20}/></i>
                    Travel Companion
            </Link>
                </li>
                   
          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Transport <i className='fas fa-caret-down' ><FiArrowDown size={15}/></i>
            </Link>
            {trasnport && <Transports />}
          </li> */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterBooking}
            onMouseLeave={onMouseLeaveBooking}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Booking <i className='fas fa-caret-down' ><FiArrowDown size={15}/></i>
            </Link>
            {booking && <Booking />}
          </li>
          <li>
                    <Link to='http://localhost:3000' target='blank' rel="noreferrer" className='nav-links' onClick={closeMobileMenu}>
                    <i className='fas fa-caret-down' ><MdOutlineShoppingCart size={20}/></i>
                    GI Products
            </Link>
                </li>
                {/* <li>
                    <Link to='http://localhost:8000/' target='blank' rel="noreferrer" className='nav-links' onClick={closeMobileMenu}>
                    <i className='fas fa-caret-down' ><FiUsers size={20}/></i>
              Logs
            </Link>
                </li> */}
                
                
            </ul>
            <div style={{ cursor: "pointer" }} onClick={() => toggledark()}>{name}</div>
            {/* <ul className={Show ? "navmenu active":"navmenu"}>
                {MenuData.map((item,index)=>{
                    return(
                        <li key={index}>
                        <a href={item.url} className={item.cName}>
                            <i className='fa-solid'>{item.icon}</i>{item.title}
                            </a>
                    </li>
                    )
                })}
                    
                </ul> */}
               
            </nav>
    )
}
export default Navbar