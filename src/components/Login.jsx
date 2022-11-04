import './styles/loginRegistration.css';
import backArrow from '../assets/icons/backArrow.png';

function Login() {
	return (
		<div>
			<button className='backArrow' title='Volver'>
				<img src={backArrow} />
			</button>
			<div className='spaceAboveLoginTittle'></div>
			<h1 className='tittle'>Inicia sesión</h1>
			<br />
			<form className='loginForm'>
				<input
					className='textField'
					type='email'
					placeholder='Correo electrónico'
					required=''
				/>
				<div className='spaceForEmailPasswordAndLogInButton'></div>
				<input
					className='textField'
					type='password'
					placeholder='Contraseña'
					required=''
				/>
				<div className='spaceForEmailPasswordAndLogInButton'></div>
				<input
					title='Iniciar sesión'
					className='logInButton'
					type='submit'
					value='Iniciar sesión'
				/>
				<div className='spaceForEmailPasswordAndLogInButton'></div>
				<span id='error' className='errorMessage'>
					{/* Here you may get an error message like "Datos incorrectos, intente nuevamente" */}
				</span>
			</form>
		</div>
	);
}

export default Login;
