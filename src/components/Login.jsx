import './styles/loginRegistration.css';
import AuthContext from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import backArrow from '../assets/icons/backArrow.png';

function Login() {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleBack = event => {
		event.preventDefault();
		navigate('/');
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const loginSubmit = data => {
		console.log(data);
		login(data);
	};

	return (
		<div>
			<button className='backArrow' title='Volver' onClick={handleBack}>
				<img src={backArrow} />
			</button>
			<div className='space100px'></div>
			<h1 className='login-tittle'>Inicia sesión</h1>
			<div className='space10px'></div>
			<form className='loginForm' onSubmit={handleSubmit(loginSubmit)}>
				<input
					className='textField'
					type='email'
					{...register('email', {
						required: true,
					})}
					placeholder='Correo electrónico'
				/>
				<div className='space16px'></div>
				<input
					className='textField'
					type='password'
					{...register('password', {
						required: true,
					})}
					placeholder='Contraseña'
				/>
				<div className='space16px'></div>
				<input
					title='Iniciar sesión'
					className='logInButton'
					type='submit'
					value='Iniciar sesión'
				/>
				<div className='space16px'></div>
				<span id='error' className='errorMessage'>
					{errors.email && (
						<span>
							Ingresa un correo electrónico.<br></br>
						</span>
					)}
					{errors.password && (
						<span>
							Ingresa una contraseña.<br></br>
						</span>
					)}
					{/* Here you may get an error message like "Datos incorrectos, intente nuevamente" */}
				</span>
			</form>
		</div>
	);
}

export default Login;
