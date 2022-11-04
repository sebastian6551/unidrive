import './styles/preLogin.css';

export const PreLogin = () => {
	return (
		<div className='base'>
			<h1> Uni-Drive</h1>
			<h2>¡Hola!, selecciona tu tipo de cuenta:</h2>
			<div>
				<button className='riderButton'> Pasajero </button>
				<button className='bidderButton'> Conductor </button>
			</div>

			<footer>
				<a className='questionAccount'>¿No tienes una cuenta?</a>
				<a className='singUpLink'>Registrate</a>
			</footer>
		</div>
	);
};
