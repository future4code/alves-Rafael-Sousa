import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/HomePage"
import {Trip} from "./Pages/ListTripsPage"
import {Login} from "./Pages/LoginPage"
import FormPage from "./Pages/ApplicationFormPage"
import {Create} from "./Pages/CreateTripPage"
import {Details} from "./Pages/TripDetailsPage"



export const Routess = ()=>{
    return (
        <div>
          <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="trips" element={<Trip/>}/>
                    <Route path="login" element={  <Login/>}/>
                    <Route path="application" element ={<FormPage/>}/>
                    <Route path="create" element ={<Create/>}/>
                    <Route path="id" element ={<Details/>}/>
                </Routes>
          </BrowserRouter>
        </div>
)
};