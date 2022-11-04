import { useNavigate } from 'react-router-dom';
import './styles/preLogin.css';

export const PreLogin = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/login');
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
				<a className='tienesCuenta'>¿No tienes una cuenta?</a>
				<a className='registrate'>Registrate</a>
			</footer>
		</div>
	);
};
