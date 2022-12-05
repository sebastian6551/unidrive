import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../services/AuthContext';
import '../components/styles/preLogin.css';

export const Landing = () => {
	const { setTypeUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = event => {
		event.preventDefault();
		setTypeUser(event.target.value);
		navigate('/login');
	};

	return (
		<div>
			<div className='space10vh'></div>
			<h1 className='uniDriveTittle'> Uni-Drive</h1>
			<div className='space9px'></div>
			<h2 className='selectAccountCaption'>
				¡Hola!, selecciona tu tipo de cuenta:
			</h2>
			<div className='space9px'></div>
			<div>
				<button
					className='buttonPassenger'
					title='Pasajero'
					onClick={handleSubmit}
					value={'rider'}
				>
					Pasajero{' '}
				</button>
				<div className='space9px'></div>
				<button
					className='buttonDriver'
					title='Conductor'
					onClick={handleSubmit}
					value={'bidder'}
				>
					Conductor{' '}
				</button>
			</div>

			<footer className='preloginFooter'>
				<label className='haveAnAccount'>¿No tienes una cuenta?</label>
				<Link to='/SingUp'>
					<button className='signUp' title='Regístrate'>
						Registrate
					</button>
				</Link>
			</footer>
		</div>
	);
};
