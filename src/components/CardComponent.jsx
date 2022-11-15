import {
	Typography,
	Grid,
	Paper,
} from '@mui/material';

export const CardComponent = () => {
	return (
		<Paper
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				width: 250, height: 95, background: '#FDBA43', borderRadius: 5
				
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm container>
					<Grid item xs container direction='column' spacing={2}>
						<Grid item xs textAlign={'left'}>
							<Typography 
							textAlign='left'
							sx={{   
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 27,
								fontWeight: 700
							}} >
								Miercoles 
							</Typography>
							<Typography sx={{   
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								left:34
							
							}}>
								Partida: 
							</Typography>
							<Typography sx={{   
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
							}} >
								LLegada:
							</Typography>
						</Grid>
						
					</Grid>


					<Grid item textAlign={'left'}>
						<Typography sx={{   
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 25,
								fontWeight: 700,
							}}>
							3:00pm
						</Typography>
						<Typography sx={{   
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								color: '#FFFFFF'
							}}>
							Centro
						</Typography>

						<Typography sx={{   
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								color: '#FFFFFF'
							}}>
							UV
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
