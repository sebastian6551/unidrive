import { createContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './styles/preLogin.css';


export const TypeUser = createContext('admin');

export const PreLogin = () => {

	const navigate = useNavigate();

	const handleSubmit = event => {
		event.preventDefault();
		TypeUser.Provider = event.target.value;
		navigate("/login");
	};

	return (
		<div className='preLoginBase'>
			<h1 className='uniDriveTittle'> Uni-Drive</h1>
			<h2 className='selectAccountCaption'>
				¡Hola!, selecciona tu tipo de cuenta:
			</h2>
			<div>
				<button
					className='buttonPasajero'
					onClick={handleSubmit}
					value={'bidder'}>
					Pasajero{' '}
				</button>
				<button
					className='buttonOfertante'
					onClick={handleSubmit}
					value={'rider'}>
					Ofertante{' '}
				</button>
			</div>

			<footer className='preloginFooter'>
				<label className='tienesCuenta'>¿No tienes una cuenta?</label>
				<Link to="/preregister">
					<label className='registrate'>Registrate</label>
				</Link>
			</footer>
		</div>
	);
};