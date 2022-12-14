import { Typography, Grid, Paper, Button, IconButton } from '@mui/material';
import deleteIcon from '../components/styles/deleteIcon.png';
import DeleteIcon from '@mui/icons-material/Delete';

export const CardComponent = props => {
	const handleDelete = event => {
		event.preventDefault();
		const temp = props.handleDelete;
		temp(props.id);
	};

	return (
		<Paper
			sx={{
				p: 2,
				margin: 'auto',
				width: 250,
				background: '#FDBA43',
				borderRadius: 5,
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-end',
				}}
			>
				<IconButton onClick={handleDelete} style={{ padding: '0' }}>
					<DeleteIcon fontSize='small' />
				</IconButton>
			</div>
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
								textAlign='left'
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
								textAlign='left'
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
							textAlign='right'
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 25,
								fontWeight: 700,
							}}
						>
							{props.hour}
						</Typography>
						<Typography
							textAlign='right'
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								color: '#FFFFFF',
							}}
						>
							{props.startingPoint}
						</Typography>

						<Typography
							textAlign='right'
							sx={{
								fontFamily: 'jost',
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 400,
								color: '#FFFFFF',
							}}
						>
							{props.arrivalPoint}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
