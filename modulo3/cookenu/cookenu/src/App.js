import axios from "axios";
import { PageReceitas } from "./telas/addreceita/addreceita";
import { Cadastro } from "./telas/cadastro/cadastro";
import { Login } from "./telas/login/login";
import { Feed } from "./telas/feed/feed";
import { Details } from "./telas/detalhes.js/detalhes";
import { Routess } from "./cordenadas/rotas";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./constants/theme"
import Headers from "./Header/header";
const App= ()=>{
    return(
        <div>
           <ThemeProvider theme={Theme}>
          <Headers/>
            <Login/>
           
           </ThemeProvider>
        </div>
    )
}
export default App