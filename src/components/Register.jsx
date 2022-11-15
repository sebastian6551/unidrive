import './styles/loginRegistration.css';
import './styles/register.css';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { UserContext } from '../pages/Singup';
import backArrow from '../assets/icons/backArrow.png';
import forwardArrow from '../assets/icons/forwardArrow.png';

export const Register = () => {
	const { nextStep, prevStep, handleChange } = useContext(UserContext);

	const handleBack = event => {
		event.preventDefault();
		prevStep();
	};

	function goForward() {
		nextStep();
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		handleChange(data);
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
				<div className='space10px'></div>
				<h1 className='login-tittle'> Regístrate </h1>
				<div className='space10px'></div>
				<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
					<input
						className='textField'
						type='text'
						placeholder='Nombre'
						{...register('firstName', {
							required: true,
							maxLength: 20,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.firstName?.type === 'required' && (
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
						{...register('lastName', {
							required: true,
							maxLength: 20,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.lastName?.type === 'required' && (
							<small>
								<br></br>El campo no puede estar vacío.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<input
						className='textField'
						type='number'
						placeholder='Número de identificación'
						{...register('document', {
							required: true,
							minLength: 10,
							maxLength: 10,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.document && (
							<small>
								<br></br>Ingresa un número de identificación valido.
							</small>
						)}
					</span>
					<div className='space10px'></div>
					<input
						className='textField'
						type='date'
						onChange={e => setDate(e.target.value)}
						placeholder='Fecha de nacimiento'
						{...register('birthDate', {
							required: true,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.birthDate?.type === 'required' && (
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
						{...register('number', {
							required: true,
							minLength: 10,
							maxLength: 10,
						})}
					/>
					<span id='error' className='errorMessage'>
						{errors.number && (
							<small>
								<br></br>Ingresa un celular válido.
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
								<br></br>Ingresa un correo válido.
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
								<br></br>Selecciona una ciudad.
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
