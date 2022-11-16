import {CardComponent} from "./CardComponent";
import { AppBarComponent } from "./AppBarComponent";
import './styles/principalBidder.css';
import {Box, Grid} from '@mui/material';
import './styles/loginRegistration.css';
import AuthContext from "../services/AuthContext";
import {useContext} from "react";

export const PrincipalRider = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
        <h1 className="h1Style">Hola Carlos!</h1>
        
        <button 
          className="searchTravelButton"
          onClick={logout}>
          Buscar Viaje
        </button>

        <Box className="cardContainer">
          <h2 className="h2Style">Viajes próximos a salir</h2>
          <h3 className="h3Style">Ahora</h3>
          
          <CardComponent></CardComponent>

          <h3 className="h4Style">Mas tarde</h3>
          <Grid direction='row' spacing={4}>
            <item><CardComponent></CardComponent></item>
            <div className='space10px'></div>
            <item><CardComponent></CardComponent></item>
          </Grid>
        </Box>
        
        <footer>
        <AppBarComponent></AppBarComponent>
        </footer>

    </div>
  )
}