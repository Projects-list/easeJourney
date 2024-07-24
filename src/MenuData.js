import React from 'react'
import { FiHome, FiMap, FiEdit3, } from "react-icons/fi";
import { FaBus, FaTrain, FaTaxi } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

export const MenuData =[
    {
        title: "Monuments",
        url: "/monument",
        cName: "nav-links",
        icon: <FiMap size={20}/>
    },

]
export const TransportAll =[
    {
        title: "Bus",
        url: "https://www.google.com/maps/dir/28.5987878,77.320955//@28.5987816,77.2797553,13z/data=!3m1!4b1!4m5!4m4!1m1!4e1!1m0!3e3",
        cName: "nav-links",
        icon: <FiHome size={20}/>
    },
    {
        title: "Train",
        url: "/trainsearch",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    }
    

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
        icon: <FaBus size={20}/>
    },
    {
        title: "Train Ticket",
        url: "https://www.irctc.co.in/nget/train-search",
        cName: "nav-links",
        icon: <FaTrain size={20}/>
    },
    {
        title: "Flight Ticket",
        url: "https://www.makemytrip.com/flights/",
        cName: "nav-links",
        icon: <MdFlight size={20}/>
    },
    {
        title: "Cab Booking",
        url: "https://www.makemytrip.com/car-rental/delhi-city-cabs.html",
        cName: "nav-links",
        icon: <FaTaxi size={20}/>
    }
    

]