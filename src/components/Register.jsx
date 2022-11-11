import './styles/register.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import backArrow from '../assets/icons/backArrow.png';
import nextArrow from '../assets/icons/nextArrow.png';
import {useState} from 'react';

export const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	const navigate = useNavigate();
	const handleBack = event => {
		event.preventDefault();
		navigate('/');
	};

    const handleNext = event => {
		event.preventDefault();
		navigate('/RegistrationPage3');
	};

    const [setDate] = useState();

	return (
		<div className='base'>
			<button className='backArrow' title='Volver' onClick={handleBack}>
				<img src={backArrow} />
			</button>
			<h3 className='h3Style'>Regístrate</h3>
			
				<div className='formStyle'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className='labelStyle'>Nombre</label>
						<input
							className='inputStyle'
							type='text'
							{...register('name', {
								required: true,
								maxLength: 20,
							})}
						/>
						{errors.name?.type === 'required' && (
							<small>El campo no puede estar vacio</small>
						)}

						<label className='labelStyle'>Apellidos</label>
						<input
							className='inputStyle'
							type='text'
							{...register('lname', {
								required: true,
								maxLength: 20,
							})}
						/>
						{errors.lname?.type === 'required' && (
							<small>El campo no puede estar vacio</small>
						)}

						<label className='labelStyle'>Fecha de nacimiento</label>
						<input className='inputStyle' type="date" onChange={e=>setDate(e.target.value)} />

						<label className='labelStyle'>Celular</label>
						<input
							className='inputStyle'
							type='text'
							{...register('phoneNumber', {
								required: true,
								minLength: 10,
								maxLength: 10,
							})}
						/>
						{errors.lname?.type === 'required' && (
							<small>El campo no puede estar vacio</small>
						)}

						<label className='labelStyle'>Correo institucional</label>
						<input className='inputStyle' type='text' {...register('email')} />

						<label className='labelStyle'>Ciudad de residencia</label>
						<input
							className='inputStyle'
							type='text'
							{...register('residenceCity')}
						/>
						<button className='nextArrow' title='Continuar' onClick={handleNext}>
				<img src={nextArrow} />
			</button>
					</form>
				</div>
			</div>
	);
};
