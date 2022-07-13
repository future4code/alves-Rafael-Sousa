import React from "react"
import {useState, useEffect} from "react"
import Axios from "axios"
// import Match from "./match"


function AstroMatch(){

const [perfilAstro, setPerfilAstro]= useState(0)
const[arrayPerfil, setArrayPerfil]=useState([])



// const onClickPerfil = () => {
   
//   };

// const onChangePerfil=()=>{

// }

// const onClickLike =()=>{

// }

// arrayPerfil.map((comentario, index) => {
//     return (
//       <div key={index}>
//         <p>{comentario}</p>
//       </div>
//     )
//   });


return (
<div>
  <header>
    <h1>AstroMatch</h1>
    <button>Perfis</button>
    <button>Match</button>
  </header>

<main>
  <div>
    <img src={""}></img>
    <p>Nome</p>
    <p>descrição</p>
    <button>like</button>
    <button>dislike</button>
  </div>
</main>
</div>

);
};
 
