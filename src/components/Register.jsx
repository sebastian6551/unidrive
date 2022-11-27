import './styles/loginRegistration.css';
import './styles/register.css';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { UserContext } from '../pages/Singup';
import backArrow from '../assets/icons/backArrow.png';
import forwardArrow from '../assets/icons/forwardArrow.png';

export const Register = () => {
	const { nextStep, prevStep, handleChange, userData } = useContext(UserContext);

	const [firstName, setFirstName] = useState(userData.firstName ? userData.firstName : '')
	const [lastName, setLastName] = useState(userData.lastName ? userData.lastName : '')
	const [document, setDocument] = useState(userData.document ? userData.document : '')
	const [birthDate, setBirthDate] = useState(userData.birthDate ? userData.birthDate : '')
	const [number, setNumber] = useState(userData.number ? userData.number : '')
	const [email, setEmail] = useState(userData.email ? userData.email : '')
	const [city, setCity] = useState(userData.city ? userData.city : '')


	const handleBack = event => {
		event.preventDefault();
		handleChange({});
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
		data.city = Number(data.city)
		handleChange(data);
		goForward();
	};

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
						value={firstName}
						placeholder={'Nombre'}
						{...register('firstName', {
							required: true,
							maxLength: 20,
						})}
						onChange={(e) => { setFirstName(e.target.value) }}
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
						value={lastName}
						placeholder='Apellido'
						{...register('lastName', {
							required: true,
							maxLength: 20,
						})}
						onChange={(e) => { setLastName(e.target.value) }}
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
						value={document}
						placeholder={'Número de identificación'}
						// placeholder={userData.document ? userData.document : 'Número de identificación'}
						{...register('document', {
							required: true,
							minLength: 10,
							maxLength: 10,
						})}
						onChange={(e) => { setDocument(e.target.value) }}
					/>
					<span id='error' className='errorMessage'>
						{errors.document?.type === 'required' && (
							<small>
								<br></br> Ingresa un número de identificación valido
							</small>
						)}
						{errors.document?.type === 'validate' && (
							<small>
								<br></br>Numero de documento ya registrado
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
							value={birthDate}
							{...register('birthDate', {
								required: true,
							})}
							onChange={(e) => { setBirthDate(e.target.value) }}
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
						value={number}
						placeholder='Celular'
						{...register('number', {
							required: true,
							minLength: 10,
							maxLength: 10,
						})}
						onChange={(e) => { setNumber(e.target.value) }}
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
						placeholder={'Correo institucional'}
						value={email}
						type='email'
						{...register('email', {
							required: true,
						})}
						onChange={(e) => { setEmail(e.target.value) }}
					/>
					<span id='error' className='errorMessage'>
						{errors.email?.type === 'required' && (
							<small>
								<br></br>El campo no puede estar vacío
							</small>
						)}
						{errors.email?.type === 'validate' && (
							<small>
								<br></br>Correo ya registrado
							</small>
						)}


					</span>
					<div className='space9px'></div>
					<select
						className='selectButtonRegister'
						title='Ciudad de residencia'
						value={city}
						{...register('city', {
							required: true,
							validate: value => value !== 'noCity',
						})}
						onChange={(e) => { setCity(e.target.value) }}
					>

						<option defaultValue='noCity'>
							Ciudad de residencia
						</option>
						<option value={1}>Cali</option>
						<option value={2}>Jamundí</option>
						<option value={3}>Palmira</option>
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
