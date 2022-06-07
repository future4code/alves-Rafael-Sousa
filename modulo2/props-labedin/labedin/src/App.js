import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno.js/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
     
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/286052732_3077323355913684_2214175529127545749_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFFC5dQdZZwMecYeAipbhmGvEs4agv2dx28SzhqC_Z3HZR9gESl47385WRDCvu8m61XBr8HparMzvtbRu3vQx0n&_nc_ohc=Zv7z8iNIu4kAX-Aiwu-&_nc_ht=scontent.fbau3-1.fna&oh=00_AT9q7wgzWPT06Tb7QEqg6nch2kbYKW7qb5hsLGs_Cbq6gg&oe=62A415BE" 
          nome="Rafael" 
          descricao="Oi, eu sou o Rafael. Sou de Botucatu-sp e tenho 20 anos. Adoro jogar no meu computador, atualmente estudando na Labenu (WEB FULL STACK)"
        /> 
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
     <div ClassName="page-pequeno-container">
     <h2>Contato</h2>
     
     <CardPequeno
       imagem="https://as1.ftcdn.net/v2/jpg/01/41/00/12/1000_F_141001208_v3DEsH43GqiCQlnOM6S3pSE8guHSJO74.jpg"
       email="Email: rafael.santos259@hotmail.com"
        />

<CardPequeno
       imagem="https://cdn-icons-png.flaticon.com/512/58/58960.png"
       contato="Endereço: Rua Gregório Pedro Garcia 908 "
        />
      </div>
                
 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
