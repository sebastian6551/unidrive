import './styles/preLogin.css';

export const PreLogin = () => {
	return (
		<div className='base'>
			<h1> Uni-Drive</h1>
			<h2>¡Hola!, selecciona tu tipo de cuenta:</h2>
			<div>
				<button className='buttonPasajero'> Pasajero </button>
				<button className='buttonOfertante'> Ofertante </button>
			</div>

			<footer>
				<a className='tienesCuenta'>¿No tienes una cuenta?</a>
				<a className='registrate'>Registrate</a>
			</footer>
		</div>
	);
};
