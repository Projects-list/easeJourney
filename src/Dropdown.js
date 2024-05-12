import React, { useState } from 'react'
import { MenuData, BookingAll, TransportAll } from "./MenuData"
import './Css/navbar.css'
import './Css/Dropdown.css'
import { Link } from 'react-router-dom'
  
  const Booking=()=> {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {BookingAll.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  target='blank'
                  className={item.cName}
                  to={item.url}
                  onClick={() => setClick(false)}
                >
                  <i className='fa-solid'>{item.icon}</i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    )
  }


  // const Transports=()=> {
  //   const [click, setClick] = useState(false);
  
  //   const handleClick = () => setClick(!click);
  
  //   return (
  //     <>
  //       <ul
  //         onClick={handleClick}
  //         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
  //       >
  //         {TransportAll.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <Link
  //                 className={item.cName}
  //                 to={item.url}
  //                 onClick={() => setClick(false)}
  //               >
  //                 <i className='fa-solid'>{item.icon}</i>
  //                 {item.title}
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </>
  //   )
  // };
  

export {
    Booking
}

