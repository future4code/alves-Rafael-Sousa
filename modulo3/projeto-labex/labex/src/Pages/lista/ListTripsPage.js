import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import * as C from "./styled"

export const Trip = () => {
    const [titulo, setTitulo] = useState([])
   
    const navigate= useNavigate()


const voltarHome=()=>{
    navigate("/")
}

   useEffect(()=>{
    pegarTrip()
console.log(titulo)
   },[])

   const pegarTrip =()=>{

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-santos-alves/trips")
    .then((res)=>{
        console.log(res.data.trips)
        setTitulo(res.data.trips)
    }).catch((err)=>{
        console.log(err.res)
    })
}

        

    return (
        <div>
               <header>

                <button onClick={voltarHome}>Home</button>
               </header>
            {
                titulo.map((titulo, indice, array)=>{
                    return(
                        <C.cards key={titulo.id}>
                         
                           <h2>{titulo.planet}</h2>
                           <h4>{titulo.name}</h4>
                           <p>Data: {titulo.date}</p>
                           <p>Descrição: {titulo.description}</p>
                           <p> Dias: {titulo.durationInDays}</p>
                        
                        </C.cards>
                    )
                })
            }
        </div>
    )


        
}