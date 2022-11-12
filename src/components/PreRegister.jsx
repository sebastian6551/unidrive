import { Box, Button, Container, Grid, Typography } from '@mui/material';
import './styles/preRegister.css';

export const PreRegister = () => {
	return (
		<Container maxWidth='md'>
			<Box
				display='flex'
				flexDirection={'column'}
				maxWidth={400}
				alignItems='center'
				margin='auto'
				marginTop={15}
				padding={3}
			>
				<Typography
					variant='h2'
					padding={2}
					textAlign='center'
					fontWeight={700}
					sx={{ font_style: 'normal' }}
				>
					Regístrate
				</Typography>
				<Typography
					padding={3}
					textAlign='center'
					sx={{
						fontFamily: 'Jost',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: 17,
					}}
				>
					Selecciona tu tipo de cuenta
				</Typography>
				<Button
					sx={{
						marginTop: 6,
						borderRadius: 10,
						width: 293,
						fontFamily: 'Jost',
						fontStyle: 'normal',
						fontWeight: 400,
						background: '#EFD8F5',
						color: '#111111',
					}}
					variant='contained'
				>
					Pasajero
				</Button>
				<Typography
					padding={1}
					textAlign='center'
					sx={{
						fontFamily: 'Jost',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: 15,
					}}
				>
					PIDE, separa y organiza tus viajes
				</Typography>

				<Button
					sx={{
						marginTop: 6,
						borderRadius: 10,
						width: 293,
						fontFamily: 'Jost',
						fontStyle: 'normal',
						fontWeight: 400,
						background: '#E7C1F2',
						color: '#111111',
					}}
					variant='contained'
				>
					Conductor
				</Button>
				<Typography
					padding={1}
					textAlign='center'
					sx={{
						fontFamily: 'Jost',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: 15,
					}}
				>
					OFRECE tus cupos libres y gana dinero
				</Typography>
				<Grid container>
					<Grid item xs={12}>
						<Typography
							marginTop={10}
							sx={{
								fontFamily: 'Jost',
								fontStyle: 'normal',
								fontWeight: 400,
								fontSize: 15,
							}}
						>
							Al registrarte estás aceptando los Términos y Condiciones y la
							Política de Privacidad de Uni-drive
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
