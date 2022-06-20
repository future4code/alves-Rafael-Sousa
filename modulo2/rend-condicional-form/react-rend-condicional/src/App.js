
import React from 'react';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import EtapaFinal from './components/etapafinal'

function App() {
  return (
    <div className='container'>
     <div>
      <Etapa1/>
      <a href='Etapa2'> <button>Próxima etapa</button></a>
     </div>
    <div>
      <Etapa2/>
      <a href='Etapa3'> <button>Próxima etapa</button></a>
    </div>
    <div>
      <Etapa3/>
      <a href='EtapaFinal'> <button>Próxima etapa</button></a>
    </div>

      <EtapaFinal/>
    </div>
  );
}

export default App;
