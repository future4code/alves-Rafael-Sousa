import React from "react";
import { useNavigate } from "react-router-dom";

export const Admin = ()=>{

    const navigate = useNavigate()


    const PaginaVoltar =()=>{
        navigate('/')
    }
    const criarViagens =()=>{
        navigate('/create')
    }

    return(
        <div>
           <h3>Painel administrativo</h3>
                <button onClick={criarViagens}>criar viagem</button>
                <button onClick={PaginaVoltar}>voltar</button>
                <button onClick={""}>logout</button>
           

        </div>
    )
}

