import { useState } from "react"
import axios from "axios"

export const Create = ()=>{
const[viagem, setViagem]= useState([])
const[date, setDate]= useState()
const[nome, setNome]= useState()
const[description, setdescription] = useState()
const[tempoemdia, setTempoemDia] = useState()
const[planeta, setPlaneta]= useState()
const listaNome = (e) =>{
  setNome(e.target.value)
}
const listaDescricao = (e) =>{
    setdescription(e.target.value)
  }
  const listaPlaneta = (e) =>{
    setPlaneta(e.target.value)
  }

  const listaDia = (e) =>{
    setTempoemDia(e.target.value)
  }

  const listaData = (e) =>{
   setDate(e.target.value)
  }

const onClickCriar =()=>{
    const objeto= {
        "name":nome ,
        "planet":planeta ,
        "date":date ,
        "description": description,
        "durationInDays": tempoemdia
    }
 axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-santos-alves/trips", objeto, {
    headers:{
    auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'

    }
 })
 .then((res)=>{
    console.log(res.data)
    setViagem(res.data)
 }).catch((err)=>{
    console.log(err.response)
    
 })
}

    return(
        <div>
            <input
            placeholder="nome viagem"
            onChange={listaNome}

            />
            <input
            placeholder="descrição"
            onChange={listaDescricao}
            />
            <select onChange={listaPlaneta}>
           <option>Namekusei</option>
           <option>Marte</option>
           <option>Jupter</option>
           <option>Vegeta</option>
           <option>Saturno</option>
           <option>Netuno</option>

           
            </select>
           
            <form>
                <label htmlFor="data">Data:</label>
                <input onChange={listaData} type="date" value={date} id="data" name='data'></input>
            </form>
            
            <input
            placeholder="duração em dias"
            onChange={listaDia}
            />


            <button onClick={onClickCriar}>criar viagem</button>

            <section>
              
            </section>



            </div>
    )
    }