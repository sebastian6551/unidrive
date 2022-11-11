import { useNavigate } from 'react-router-dom';
import './styles/preLogin.css';
import { Button } from '@mui/material';

export const PreLogin = () => {
	const navigate = useNavigate();

	const handleSubmit = event => {
		event.preventDefault();
		navigate('/login');
	};


	const handlePreRegister = event => {
		event.preventDefault();
		navigate('/preRegister');
	};
	return (
		<div className='base'>
			<h1 className='uniDriveTittle'> Uni-Drive</h1>
			<h2 className='selectAccountCaption'>
				¡Hola!, selecciona tu tipo de cuenta:
			</h2>
			<div>
				<button className='buttonPasajero' onClick={handleSubmit}>
					Pasajero{' '}
				</button>
				<button className='buttonOfertante' onClick={handleSubmit}>
					Ofertante{' '}
				</button>
			</div>

			<footer className='preloginFooter'>
				<Button
					onClick={() => handlePreRegister}
				>
					Registrate
				</Button>
			</footer>
		</div>
	);
};
