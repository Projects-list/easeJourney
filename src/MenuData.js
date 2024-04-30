import React from 'react'
import { FiHome, FiMap, FiEdit3, FiBriefcase, FiBook, FiMail } from "react-icons/fi";

export const MenuData =[
    {
        title: "Monuments",
        url: "/monument",
        cName: "nav-links",
        icon: <FiMap size={20}/>
    },

]

export const BookingAll =[
    {
        title: "Hotel",
        url: "https://www.makemytrip.com/hotels/",
        cName: "nav-links",
        icon: <FiHome size={20}/>
    },
    {
        title: "Bus Ticket",
        url: "https://www.redbus.in/?gclid=CjwKCAjw0N6hBhAUEiwAXab-TfNonIxidyc_dewTtCp_G-DEZhPCMKTxkLERwqcDF1d5h64-k4vmNhoCSqwQAvD_BwE",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    },
    {
        title: "Train Ticket",
        url: "https://www.irctc.co.in/nget/train-search",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    }
    

]