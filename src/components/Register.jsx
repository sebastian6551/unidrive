import './styles/loginRegistration.css';
import './styles/register.css';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { UserContext } from '../pages/Singup';
import backArrow from '../assets/icons/backArrow.png';
import forwardArrow from '../assets/icons/forwardArrow.png';

export const Register = () => {
	const { nextStep, prevStep, handleChange, userData } = useContext(UserContext);

	const handleBack = event => {
		event.preventDefault();
		handleChange({})
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
			<div className='space2vh'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>
			<div>
				<div className='space9px'></div>
				<h1 className='login-tittle'> Regístrate </h1>
				<div className='space10px'></div>
				<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
					<input
						className='textField'
						title='Nombre'
						type='text'
						value={userData ? userData.firstName : ''}
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
					<div className='space9px'></div>
					<input
						className='textField'
						title='Apellido'
						type='text'
						value={userData ? userData.lastName : ''}
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
					<div className='space9px'></div>
					<input
						className='textField'
						title='Número de identificación'
						type='number'
						value={userData ? userData.document : ''}
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
					<div className='space9px'></div>
					<div className='dateOfBirthDiv'>
						<label title='Fecha de nacimiento'>Fecha de nacimiento</label>
						<br></br>
						<input
							className='dateOfBirthInput'
							title='Fecha de nacimiento'
							type='date'
							value={userData ? userData.birthDate : ''}
							onChange={e => setDate(e.target.value)}
							{...register('birthDate', {
								required: true,
							})}
						/>
					</div>
					<span id='error' className='errorMessage'>
						{errors.birthDate?.type === 'required' && (
							<small>
								<br></br>El campo no puede estar vacío.
							</small>
						)}
					</span>
					<div className='space9px'></div>
					<input
						className='textField'
						title='Celular'
						type='number'
						value={userData ? userData.number : ''}
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
					<div className='space9px'></div>
					<input
						className='textField'
						title='Correo institucional'
						value={userData ? userData.email : ''}
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
					<div className='space9px'></div>
					<select
						className='selectButtonRegister'
						title='Ciudad de residencia'
						defaultValue={userData ? userData.residenceCity : 'noCity'}
						{...register('residenceCity', {
							required: true,
							validate: value => value !== 'noCity',
						})}
					>

						<option defaultValue='noCity'>
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
