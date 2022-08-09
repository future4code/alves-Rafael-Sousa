import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/home/HomePage"
import {Trip} from "./Pages/lista/ListTripsPage"
import {Login} from "./Pages/login/LoginPage"
import FormPage from "./Pages/interação User/ApplicationFormPage"
import {Create} from "./Pages/create/CreateTripPage"
import {Details} from "./Pages/details/TripDetailsPage"
import { Admin } from "./Pages/admin/AdminHomePage"


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
                    <Route path="admin" element ={<Admin/>}/>
                </Routes>
          </BrowserRouter>
        </div>
)
};