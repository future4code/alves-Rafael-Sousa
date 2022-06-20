import React from "react";



class Etapa2 extends React.Component{
render(){
    return(
      <div>
        <h1>ETAPA 2- INFORMAÇÕES DO ENSINO SUPERIOR</h1>

         <ul>
        <li>
            5.Qual Curso?
            <input type={'text'} placeholder = {'Curso'}/>
        </li>
        <li>
            6. Qual unidade de ensino?
            <input type={'text'} placeholder = {'Unidade'}/>
        </li>

         </ul>


      </div>  
    )
}
}

export default Etapa2