import { Alert, Snackbar } from '@mui/material';

export default function ErrorAlert({ open, onClose, message }) {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={onClose}
		>
			<Alert variant='filled' severity='error'>
				<b>Error: </b>
				{message}
			</Alert>
		</Snackbar>
	);
}
