import { Alert, Snackbar } from '@mui/material';

export default function SuccessAlert({ open, onClose, message }) {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={onClose}
		>
			<Alert variant='filled' severity='success'>
				<b>Information: </b>
				{message}
			</Alert>
		</Snackbar>
	);
}
