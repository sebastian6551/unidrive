import { Typography, Grid, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DetailTripRider } from '../pages/DetailTripRider';

export const CardComponent = props => {
	const [open, setOpen] = useState(false);

	const handleDelete = event => {
		event.preventDefault();
		const del = props.handleDelete;
		del(props.id);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Paper
				sx={{
					p: 1,
					margin: 'auto',
					width: 300,
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
					{props.typeUser === 'bidder' && (
						<IconButton onClick={handleDelete} style={{ padding: '0' }}>
							<DeleteIcon fontSize='small' />
						</IconButton>
					)}
				</div>
				<Grid container spacing={1}>
					<Grid item xs={12} sm container>
						<Grid item xs container direction='column' spacing={2}>
							<Grid item xs textAlign={'left'}>
								<Typography
									textAlign='left'
									sx={{
										fontFamily: 'jost',
										fontStyle: 'normal',
										fontSize: 15,
										fontWeight: 700,
									}}
								>
									{props.day}
								</Typography>
								<Typography
									textAlign='left'
									sx={{
										fontFamily: 'jost',
										fontStyle: 'normal',
										fontSize: 15,
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
										fontSize: 15,
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
									fontSize: 18,
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
									fontSize: 15,
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
									fontSize: 15,
									fontWeight: 400,
									color: '#FFFFFF',
								}}
							>
								{props.arrivalPoint}
							</Typography>
						</Grid>
					</Grid>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<IconButton onClick={handleOpen} style={{ padding: '3' }}>
							<RemoveRedEyeIcon fontSize='small' />
						</IconButton>
					</div>
				</Grid>
			</Paper>
			<Dialog open={open} onClose={handleClose} fullScreen>
				<DialogContent>
					<DetailTripRider
						day={props.day}
						hour={props.hour}
						startingPoint={props.startingPoint}
						arrivalPoint={props.arrivalPoint}
						rate={props.other ? props.other[0] : ''}
						description={props.other ? props.other[1] : ''}
						typeUser={props.typeUser}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cerrar</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
