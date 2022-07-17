import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

export const Login =()=>{

    const[email, setEmail]= useState()
    const[password, setpassword]= useState()

const navigate = useNavigate()

const onChangeEmail=(event)=>{
    setEmail(event.target.value);
};

const onchangePassword =(event)=>{
    setpassword(event.target.value)
}

const onSubmitLogin =()=>{
    console.log(password, email)
const body = {
    email: email,
    password: password
}



    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/login", body)
    .then((response)=>{
            console.log("deu certo:",response.data.token)
            localStorage.setItem("token",response.data.token)
            navigate("/admin")
            console.log(response.data.token)
    })
    .catch((error)=>{
        console.log("deu errado:",error.response)
    })
}

return(
    <div>
        <input
        placeholder="email"
       type={"email"}
        onChange ={onChangeEmail}
        />

        <input
        placeholder="password"
        type={"password"}
        onChange={onchangePassword}
        />

        <button onClick={onSubmitLogin}>entrar</button>
    </div>
)}