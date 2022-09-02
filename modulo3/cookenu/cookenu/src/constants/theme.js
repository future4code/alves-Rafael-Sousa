import { createTheme } from "@mui/material";
import {corPrimaria, corSucundaria} from "./colors"


export const Theme= createTheme({
    palette:{
        primary:{
            main: corPrimaria,
            contrastText: "#eba327"
        },
        text:{
            primary: corSucundaria
        }
    }
})



