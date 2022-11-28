import { RedBoxInterfaceTitleComponent } from "./RedBoxInterfaceTitleComponent"
import { CardComponent } from "./CardComponent"
import { AppBarComponent} from "./AppBarComponent"
import { Box,Typography, Grid} from "@mui/material"


export const TravelInformationComponent = props => {
  return (
    <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
 
            <Grid xs={12}>
                <RedBoxInterfaceTitleComponent title="Detalles del viaje"/>
            </Grid>

            <Grid xs={12}>
                <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
            </Grid> 

            <Grid xs={12}>
                    <Box textAlign={'left'} sx={{margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				width: 322,
				height: 393, background:'#808080', borderRadius: 2,
                fontFamily: 'jost',
									fontStyle: 'normal',
									fontSize: 20,
									fontWeight: 600,
                }}>
                        <label>Tipo de transporte:</label>
                        
                        <Typography
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 15,
								fontWeight: 400,
							}}
						> 
                        {' '}
							{props.typeOfTransport}{' '}
                        </Typography>   

                    </Box>
                    </Grid>

                <Grid xs={12}>
                <AppBarComponent></AppBarComponent>
            </Grid >
        </Grid>
    </div>
  )
}
