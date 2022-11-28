import './styles/loginRegistration.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../services/UserContext'
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import backArrow from '../assets/icons/backArrow.png';
import RegisterServices from '../services/registerServices';

export const RegisterVehicle = () => {
	const navigate = useNavigate();
	const { prevStep, userData, typeUser } = useContext(UserContext);
	const createUser = RegisterServices.createUser;

	const [vehicle, setVehicle] = useState(userData.typeVehicle ? userData.typeVehicle : '')

	const handleBack = event => {
		event.preventDefault();
		prevStep();
	};

	const changeNumber = (data) => {
		data.brandVehicle = Number(data.brandVehicle);
		data.colorVehicle = Number(data.colorVehicle);
		data.typeVehicle = Number(data.typeVehicle);
		data.yearVehicle = Number(data.yearVehicle);
	}

	const formSchema = Yup.object().shape({
		typeVehicle: Yup.string()
			.required()
			.notOneOf(['noVehicle'], 'Selecciona un tipo de vehículo.'),
		colorVehicle: Yup.string()
			.required()
			.notOneOf(['noColor'], 'Selecciona un color.'),
		plate: Yup.string()
			.required('Completa el campo.')
			.min(6, 'La placa debe ser de 6 caracteres.')
			.max(6, 'La placa debe ser de 6 caracteres.'),
		brandVehicle: Yup.string()
			.required()
			.notOneOf(['noBrand'], 'Selecciona una marca.'),
		available: Yup.number()
			.required('Completa el campo.')
			.min(1, 'Los cupos deben ser entre 1 y 4.')
			.max(4, 'Los cupos deben ser entre 1 y 4.'),
		yearVehicle: Yup.string()
			.required()
			.notOneOf(['noModel'], 'Selecciona un modelo.'),
		password: Yup.string()
			.required()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_-]{8,15}$/
			),
		confirmPassword: Yup.string().oneOf(
			[Yup.ref('password')],
			'Las contraseñas no coinciden.'
		),
	});

	const formOptions = {
		resolver: yupResolver(formSchema),
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(formOptions);

	const onSubmit = data => {
		changeNumber(data);
		const fullData = Object.assign(userData, data);
		const user = JSON.parse(
			JSON.stringify(fullData, [
				'firstName',
				'lastName',
				'email',
				'password',
				'birthDate',
				'number',
				'document',
				'plate',
				'available',
				'typeVehicle',
				'brandVehicle',
				'colorVehicle',
				'yearVehicle',
				'city'
			])
		);
		createUser(user, typeUser).then(res => {
			if (res.status === 201) {
				alert('Usuario y vehiculo registrado con exito');
				navigate('/');
			} else if (res.status === 400) {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
	};

	return (
		<div>
			<div className='space2vh'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>
			<div className='space9px'></div>
			<h2 className='addAVehicleCaption'>Añade los datos de tu vehículo:</h2>
			<div className='space9px'></div>
			<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
				<select
					className='selectButtonRegister'
					title='Tipo de vehículo'
					value={vehicle}
					{...register('typeVehicle',{
						required:true,
						validate: value => value !== 'noVehicle',
					})}

					onChange={(e) => { setVehicle(e.target.value) }}
				>
					<option defaultValue='noVehicle'>
						Tipo de vehículo
					</option>
					<option value={1}>Carro</option>
					<option value={2}>Moto</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.typeVehicle?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<select
					className='selectButtonRegister'
					title='Color'
					defaultValue={'noColor'}
					{...register('colorVehicle')}
				>
					<option defaultValue='noColor'>
						Color
					</option>
					<option value={1}>Azul</option>
					<option value={2}>Blanco</option>
					<option value={3}>Amarillo</option>
					<option value={4}>Gris</option>
					<option value={5}>Negro</option>
					<option value={6}>Rojo</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.colorVehicle?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<input
					className='textField'
					title='Placa'
					type='text'
					placeholder='Placa'
					{...register('plate')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.plate?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<select
					className='selectButtonRegister'
					title='Marca'
					defaultValue={'noBrand'}
					{...register('brandVehicle')}
				>
					<option defaultValue='noBrand'>
						Marca
					</option>
					<option value={1}>Tesla</option>
					<option value={2}>Hyundai</option>
					<option value={3}>Chevrolet</option>
					<option value={4}>Honda</option>
					<option value={5}>Suzuki</option>
					<option value={6}>Yamaha</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.brandVehicle?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<select
					className='selectButtonRegister'
					title='Modelo'
					defaultValue={'noModel'}
					{...register('yearVehicle')}
				>
					<option defaultValue='noModel'>
						Modelo
					</option>
					<option value={1}>2021</option>
					<option value={2}>2020</option>
					<option value={3}>2019</option>
					<option value={4}>2018</option>
					<option value={5}>2017</option>
					<option value={6}>2016</option>
					<option value={7}>2015</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.yearVehicle?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<input
					className='textField'
					title='Cupos'
					type='number'
					placeholder='Cupos'
					{...register('available')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.available?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<h2 className='createAPasswordCaption'>
					Por último, crea una contraseña segura:
				</h2>
				<div className='space9px'></div>
				<input
					className='textField'
					title='Contraseña'
					type='password'
					placeholder='Contraseña'
					{...register('password')}
				/>
				<div className='space9px'></div>
				<input
					className='textField'
					title='Confirmar contraseña'
					type='password'
					placeholder='Confirmar contraseña'
					{...register('confirmPassword')}
				/>
				<div className='space20px'></div>
				<input
					title='Crear cuenta'
					className='logInButton'
					type='submit'
					value='Crear cuenta'
				/>
				<div className='space14px'></div>
				<span id='error' className='errorMessage'>
					<span>
						{errors.password?.type === 'required' && (
							<small>
								Completa el campo.
								<br></br>
							</small>
						)}
						{errors.password?.type === 'matches' && (
							<small>
								<br></br>Ingresa entre 8 a 15 caracteres y al menos
								<br></br>una letra mayúscula, una minúscula, un número y un
								caracter especial.
								<br></br>No ingreses espacios en blanco.
								<br></br>
							</small>
						)}
					</span>
					<span>
						<small>{errors.confirmPassword?.message}</small>
						<br></br>
					</span>
				</span>
			</form>
		</div>
	);
};
