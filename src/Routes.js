import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Monument from "./Monument"
import Rajasthan from "./Rajasthan"
import Travel from "./Travel"
import About from "./About"
import Contact from "./Contact"
import Team from "./Team"
import Features from "./Features"
import Faq from "./Faq"

const RouteNavs =()=>{
return(
    <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/monument' element={<Monument/>}/>
    <Route exact path='/rajasthan' element={<Rajasthan/>}/>
    <Route exact path='/travel' element={<Travel/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/team' element={<Team/>}/>
    <Route exact path='/features' element={<Features/>}/>
    <Route exact path='/faq' element={<Faq/>}/>
   </Routes>
    </>
)
}
export default RouteNavs