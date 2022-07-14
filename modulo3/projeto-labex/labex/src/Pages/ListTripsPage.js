import React from "react"
import { useState } from "react"


export const Trip = () => {
    const [titulo, setTitulo] = useState([])
   


    return (
        <div>
   {
          setTitulo.map((titulo) => {
                return <>
                    id={titulo.id}
                    title={titulo.title}
                    description={titulo.description}
                    dueDate={titulo.dueDate.split("T")[0]}
                </>
            }
          )
        }
        </div>
    )


        
}