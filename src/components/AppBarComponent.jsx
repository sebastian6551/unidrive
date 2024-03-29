import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import home from '../assets/icons/home.png';
import clockHistorial from '../assets/icons/clockHistorial.png';
import travels from '../assets/icons/travels.png';
import notifications from '../assets/icons/notifications.png';
import menu from '../assets/icons/menu.png';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../hooks/AuthContext';

export const AppBarComponent = () => {
	const { typeUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handledHome = () => {
		navigate('/' + typeUser);
	};

	const handledHistory = () => {
		navigate('/' + typeUser + '/history');
	};

	const handledNotification = () => {
		navigate('/' + typeUser + '/notification');
	};

	const handledUpcoming = () => {
		navigate('/' + typeUser + '/upcomingtrips');
	};

	return (
		<Box
			position='static'
			sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
		>
			<AppBar position='static' sx={{ background: '#FFFFFF', border: 1 }}>
				<Toolbar sx={{ paddingInlineStart: 3 }}>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 5, flexGrow: 5 }}
						onClick={handledHome}
					>
						<img src={home} />
					</IconButton>

					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 5, flexGrow: 5 }}
						onClick={handledUpcoming}
					>
						<img src={travels} />
					</IconButton>

					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 5, flexGrow: 5 }}
						onClick={handledHistory}
					>
						<img src={clockHistorial} />
					</IconButton>

					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 5, flexGrow: 5 }}
						onClick={handledNotification}
					>
						<img src={notifications} />
					</IconButton>

					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 5, flexGrow: 5 }}
					>
						<img src={menu} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
