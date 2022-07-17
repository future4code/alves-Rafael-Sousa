import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styled"

 function HomePg(){
    const Navigate = useNavigate()

    
    const gotoLoginPage =()=>{
        Navigate("/login")
    }
    const goListPage =()=>{
        Navigate("/trips")
    }
    return(
        <div>
                <C.estilo>LabeX</C.estilo>
                <C.butao onClick={goListPage}>Viagens</C.butao>
                <C.butao onClick={gotoLoginPage}>Fazer Login</C.butao>
        </div>
    )
}
export default HomePg