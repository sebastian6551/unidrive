import { useNavigate, Link } from 'react-router-dom';
import './styles/preLogin.css';

export const PreLogin = () => {
	const navigate = useNavigate();

	const handleSubmit = event => {
		event.preventDefault();
		navigate('/login');
	};

	return (
		<div className='preLoginBase'>
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
				<label className='tienesCuenta'>¿No tienes una cuenta?</label>
				<Link to="/register">
					<label className='registrate'>Registrate</label>
				</Link>
			</footer>
		</div>
	);
};
