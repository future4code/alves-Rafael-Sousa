import axios from "axios";
import { useEffect } from "react";
const token = localStorage.getItem("token")
export const Details =()=>{

    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trip/NoIFVcOiSgTKTIPVZwXS",{
            headers:{
                auth:token
            }
        })
        .then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error.response)
        })
    },[])
}
