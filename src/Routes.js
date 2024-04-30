import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Monument from "./Monument"
import Travel from "./Travel"


const RouteNavs =()=>{
return(
    <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/monument' element={<Monument/>}/>
    <Route exact path='/travel' element={<Travel/>}/>
   </Routes>
    </>
)
}
export default RouteNavs