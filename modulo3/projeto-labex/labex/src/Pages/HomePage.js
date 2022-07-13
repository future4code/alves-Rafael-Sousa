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
                <button onClick={goListPage}>ver viagens</button>
                <button onClick={gotoLoginPage}>proxima pagina</button>
        </div>
    )
}
export default HomePg