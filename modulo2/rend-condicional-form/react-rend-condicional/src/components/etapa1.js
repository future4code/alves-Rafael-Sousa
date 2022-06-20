import React from 'react'




class Etapa1 extends React.Component{

    render(){
        return(
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ul>
               <li>
                1. Qual seu nome?
                <input type={'text'} placeholder={'nome'}/> 
                </li> 
                <li>
                2. Qual sua idade?
                <input type={'number'} placeholder={'idade'}/> 
                </li>
                <li>
                3. Qual seu e-mail?
                <input type={'text'} placeholder={'e-mail'}/> 
                </li>
                <li>
                4. Qual sua escolaridade?
                <input type={Selection} /> 
                </li>
    
                </ul>
            </div>
        )
    }
}
export default Etapa1;