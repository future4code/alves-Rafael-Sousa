import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { StyledToobar } from './styled'
import Button from '@mui/material/Button'
import Logo from "../assets/Cookenu.png"
// import { useNavigate } from 'react-router'
export default function Headers() {
// const navigate= useNavigate()
  
// const goToLogin = () =>{ 

//   navigate("/login")
// }

// const goToFeed =()=>{
//   navigate("/feed")
// }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToobar>
         
             <Button><img src={Logo} width ="150px" height="60px"/></Button>
             <Button  color="inherit">Login</Button>
        </StyledToobar>
      </AppBar>
    </Box>
  );
}
