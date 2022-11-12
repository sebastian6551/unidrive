import './styles/loginRegistration.css';
import './styles/register.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useState} from 'react';
import backArrow from '../assets/icons/backArrow.png';
import forwardArrow from '../assets/icons/forwardArrow.png';


export const Register = () => {
	
	const navigate = useNavigate();

	const handleBack = event => {
		event.preventDefault();
		navigate('/preregister');
	};

	function goForward() {
		navigate('/register2');
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		console.log(data);
		goForward();
	};

   	const [setDate] = useState();

	return (
		<div>
			<div className='space10px'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>
			<div>
				<h1 className='login-tittle'> Regístrate </h1>
				<div className='space10px'></div>
				<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
					<input
						className='textField'
						type='text'
						placeholder='Nombre'
						{...register('name', {
							required: true,
							maxLength: 20,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.name?.type === 'required' && (
							<small>
								<br></br>El campo no puede estar vacío.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<input
						className='textField'
						type='text'
						placeholder='Apellido'
						{...register('lname', {
							required: true,
							maxLength: 20,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.lname?.type === 'required' && (
							<small>
								<br></br>El campo no puede estar vacío.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<input
						className='textField'
						type='date'
						onChange={e=>setDate(e.target.value)} 
						placeholder='Fecha de nacimiento'
						{...register('birthday', {
							required: true,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.birthday?.type === 'required' && (
							<small>
								<br></br>El campo no puede estar vacío.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<input
						className='textField'
						type='number'
						placeholder='Celular'
						{...register('phoneNumber', {
							required: true,
							minLength: 10,
							maxLength: 10,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.phoneNumber && (
							<small>
								<br></br>Ingrese un celular válido.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<input
						className='textField'
						placeholder='Correo institucional'
						type='email'
						{...register('email', {
							required: true,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.email?.type === 'required' && (
							<small>
								<br></br>Ingrese un correo válido.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<select
						className='selectButtonRegister'
						{...register('residenceCity', {
							required: true,
							validate: value => value !== 'noCity',
						})}
					>
						<option hidden selected value='noCity'>
							Ciudad de residencia
						</option>
						<option value='cali'>Cali</option>
						<option value='jamundi'>Jamundí</option>
						<option value='palmira'>Palmira</option>
					</select>
					<span id='error' className='errorMessage'>
						{errors.residenceCity && (
							<small>
								<br></br>Seleccione una ciudad.
							</small>
						)}
					</span>
					<div className='space20px'></div>
					<span className='spaceLeft'>
						<button className='forwardArrow' title='Continuar' type='submit'>
							<img src={forwardArrow} />
							</button>
					</span>
				</form>
			</div>
		</div>
	);
};