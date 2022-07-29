import React, { useEffect, useState } from "react";
import { DivLogo, InputLogin, LogoTipo } from "./styled";
import Logo from "../../assets/login.png"
import { TextField } from "@mui/material";
import axios from "axios";

export const Login = ()=> {
const [login, setLogin]= useState([])    
const [email, setEmail] = useState()
const [password, setPassword] = useState()
  
const onClickLogin = ()=>{

  const body = {
    email: email, 
   password: password
}
  axios.post("https://cookenu-api.herokuapp.com/user/login", body, {
    headers:{
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhNzBhMTQzLTZhNzEtNDcwMS1iNjkxLWRiOTY2ODZhZGM0NyIsImlhdCI6MTYzMDQyNjgyMSwiZXhwIjoxNjMwNTk5NjIxfQ.Yuo-stRHy9Xz5W_K1JyoLzciP2A43geg8D9YcLMTK4Y"
    }
  })
  .then((resp)=>{
   setLogin(resp.data)
   console.log("deu certo", resp.data)
  }).catch((err)=>{
    console.log("deu errado",err.resp)
  })
}
const onChangeEmail = (event)=>{
    setEmail(event.data.raw)
}
const onChangeSenha = (event)=>{
  setPassword(event.data.value)
}

  return(
    <DivLogo>
        <LogoTipo src={Logo}></LogoTipo>

        <input
        placeholder="E-mail"
        onChange={onChangeEmail}
        />
     
        <input
        placeholder="Password"
        onChange={onChangeSenha}
        
        />
        <button onClick={onClickLogin}>Login</button>
    </DivLogo>
  )


   


}