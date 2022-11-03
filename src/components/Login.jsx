import './styles/loginRegistration.css';
import AuthContext from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useRef } from "react";
import backArrow from '../assets/icons/backArrow.png';

function Login() {
	const email = useRef("");
	const password = useRef("");
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleBack = (event) => {
		event.preventDefault();
		navigate("/");
	}

	const loginSubmit = async (event) => {
		event.preventDefault();
		console.log(email.current.value)
		console.log(password.current.value)
		const data = {
			email: email.current.value,
			password: password.current.value,
		};
		await login(data);
	};

	return (
		<div>
			<button
				className='backArrow'
				title='Volver'
				onClick={handleBack}>
				<img src={backArrow} />
			</button>
			<div className='spaceAboveLoginTittle'></div>
			<h1 className='tittle'>Inicia sesión</h1>
			<div className='spaceBetweenTittleAndForm'></div>
			<form className='loginForm'>
				<input
					className='textField'
					type='email'
					ref={email}
					placeholder='Correo electrónico'
					required=''
				/>
				<div className='spaceForEmailPasswordAndLogInButton'></div>
				<input
					className='textField'
					type='password'
					ref={password}
					placeholder='Contraseña'
					required=''
				/>
				<div className='spaceForEmailPasswordAndLogInButton'></div>
				<input
					title='Iniciar sesión'
					className='logInButton'
					type='submit'
					value='Iniciar sesión'
					onClick={loginSubmit}
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
