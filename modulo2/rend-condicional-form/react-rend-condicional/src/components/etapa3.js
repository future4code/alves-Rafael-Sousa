import React from "react";



class Etapa3 extends React.Component{
render(){
    return(
      <div>
        <h1>ETAPA 2- INFORMAÇÕES DO ENSINO MEDIO</h1>

         <ul>
        <li>
            7.Qual Curso?
            <input type={'text'} placeholder = {'Curso'}/>
        </li>
        <li>
            8. Qual unidade de ensino?
            <input type={'text'} placeholder = {'Unidade'}/>
        </li>

         </ul>


      </div>  
    )
}
}

export default Etapa3