import { Box, Button, Container, Grid, Typography } from '@mui/material';
import './styles/preRegister.css';
import { UserContext } from '../pages/Singup';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../assets/icons/backArrow.png';

export const PreRegister = () => {
	const { SetTypeUser, nextStep } = useContext(UserContext);
	const navigate = useNavigate();

	const handleClick = event => {
		event.preventDefault();
		SetTypeUser(event.target.value);
		nextStep();
	};

	const handleBack = event => {
		event.preventDefault();
		navigate("/")
	};

	return (
		<div>
			<div className='space2vh'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>

			<Container maxWidth='md'>
				<Box
					display='flex'
					flexDirection={'column'}
					maxWidth={400}
					alignItems='center'
					margin='auto'
					marginTop={2}
					padding={1}
				>
					<Typography
						variant='h2'
						padding={2}
						textAlign='center'
						fontWeight={700}
						sx={{
							fontFamily: 'Jost',
							font_style: 'normal',
							fontWeight: 700,
							fontSize: '2em',
						}}
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
							fontSize: '1.0625em',
						}}
					>
						Selecciona el tipo de cuenta que deseas crear:
					</Typography>
					<Button
						onClick={handleClick}
						value={'rider'}
						sx={{
							marginTop: 2,
							borderRadius: 10,
							width: 293,
							fontFamily: 'Jost',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '0.9375em',
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
							fontSize: '0.9375em',
						}}
					>
						PIDE, separa y organiza tus viajes
					</Typography>
					<Button
						onClick={handleClick}
						value={'bidder'}
						sx={{
							marginTop: 2,
							borderRadius: 10,
							width: 293,
							fontFamily: 'Jost',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '0.9375em',
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
							fontSize: '0.9375em',
						}}
					>
						OFRECE tus cupos libres y gana dinero
					</Typography>
					<Grid container>
						<Grid item xs={12}>
							<Typography
								marginTop={8}
								sx={{
									fontFamily: 'Jost',
									fontStyle: 'normal',
									fontWeight: 400,
									fontSize: '0.9375em',
								}}
							>
								Al registrarte estás aceptando los Términos y Condiciones y la
								Política de Privacidad de Uni-drive
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};
