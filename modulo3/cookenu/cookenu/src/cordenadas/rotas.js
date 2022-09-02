import {BrowserRouter, Routes, Route} from "react-router-dom";
import { PageReceitas } from "../telas/addreceita/addreceita";
import { Cadastro } from "../telas/cadastro/cadastro";
import { Login } from "../telas/login/login";
import { Feed } from "../telas/feed/feed";
import { Details } from "../telas/detalhes.js/detalhes";
import Headers from "../Header/header";
export const Routess = ()=>{
    return (
        <div>
          <BrowserRouter>
                   <Headers/>
                <Routes>
                    <Route index element={<PageReceitas/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="feed" element={  <Feed/>}/>
                    <Route path="cadastro" element ={<Cadastro/>}/>
                    <Route path="details" element ={<Details/>}/>
                </Routes>
          </BrowserRouter>
        </div>
    )
}