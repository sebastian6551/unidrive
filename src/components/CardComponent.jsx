import { Typography, Grid, Paper, Button } from '@mui/material';
import deleteIcon from '../assets/icons/deleteIcon.png';

export const CardComponent = props => {
	return (
		<Paper
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				width: 250,
				height: 95,
				background: '#FDBA43',
				borderRadius: 5,
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
									fontWeight: 700,
								}}
							>
								{' '}
								{props.day}{' '}
							</Typography>
							<Typography
								sx={{
									fontFamily: 'jost',
									fontStyle: 'normal',
									fontSize: 20,
									fontWeight: 400,
									left: 34,
								}}
							>
								Partida:
							</Typography>
							<Typography
								sx={{
									fontFamily: 'jost',
									fontStyle: 'normal',
									fontSize: 20,
									fontWeight: 400,
								}}
							>
								LLegada:
							</Typography>
						</Grid>
					</Grid>

					<Grid item textAlign={'left'}>
						<Typography
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 25,
								fontWeight: 700,
							}}
						>
							{' '}
							{props.hour}{' '}
						</Typography>
						<Typography
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								color: '#FFFFFF',
							}}
						>
							{' '}
							{props.startingPoint}{' '}
						</Typography>

						<Typography
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								color: '#FFFFFF',
							}}
						>
							{' '}
							{props.arrivalPoint}{' '}
						</Typography>
					</Grid>
					<Button
					
					sx={{
						position: 'relative',
						width: '8.3%',
						height: '8.3%',
						left: '8.3%',
						bottom: '8.3%',

					}}>
						<img src ={deleteIcon} />
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};
