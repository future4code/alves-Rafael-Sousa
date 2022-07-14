import React from "react";
import { useNavigate } from "react-router-dom";

 function HomePg(){
    const Navigate = useNavigate()

    
    const gotoLoginPage =()=>{
        Navigate("./login")
    }
    const goListPage =()=>{
        Navigate("./trips")
    }
    return(
        <div>
                <h3>LabeX</h3>
                <button onClick={goListPage}>Viagens</button>
                <button onClick={gotoLoginPage}>Fazer Login</button>
        </div>
    )
}
export default HomePg