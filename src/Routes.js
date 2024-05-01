import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Monument from "./Monument"
import Rajasthan from "./Rajasthan"
import Travel from "./Travel"


const RouteNavs =()=>{
return(
    <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/monument' element={<Monument/>}/>
    <Route exact path='/rajasthan' element={<Rajasthan/>}/>
    <Route exact path='/travel' element={<Travel/>}/>
   </Routes>
    </>
)
}
export default RouteNavs