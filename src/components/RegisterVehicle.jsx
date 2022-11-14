import './styles/loginRegistration.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../pages/Singup';
import { useContext } from 'react';
import * as Yup from 'yup';
import backArrow from '../assets/icons/backArrow.png';
import RegisterServices from '../services/registerServices';

export const RegisterVehicle = () => {
	const navigate = useNavigate();
	const { prevStep, userData, typeUser } = useContext(UserContext);
	const createBidder = RegisterServices.createBidder;
	const handleBack = event => {
		event.preventDefault();
		prevStep();
	};

	const formSchema = Yup.object().shape({
		vehicle: Yup.string()
			.required()
			.notOneOf(['noVehicle'], 'Selecciona un tipo de vehículo.'),
		color: Yup.string()
			.required()
			.notOneOf(['noColor'], 'Selecciona un color.'),
		plate: Yup.string()
			.required('Completa el campo.')
			.min(6, 'La placa debe ser de 6 caracteres.')
			.max(6, 'La placa debe ser de 6 caracteres.'),
		brand: Yup.string().required('Completa el campo.'),
		model: Yup.string()
			.required('Completa el campo.')
			.min(4, 'Ingrese un año válido')
			.max(4, 'Ingrese un año válido'),
		password: Yup.string()
			.required()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/
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
		userData.password = data.password;
		JSON.stringify(userData);
		const user = JSON.parse(
			JSON.stringify(userData, [
				'firstName',
				'lastName',
				'email',
				'password',
				'birthDate',
				'number',
			])
		);
		createBidder(user, typeUser).then(res => {
			if (res.status === 201) {
				navigate('/');
			} else if (res.status === 409) {
				console.log('Ya existe un conductor con ese email registrado');
			}
		});
	};

	return (
		<div>
			<div className='space10px'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>
			<div className='space10px'></div>
			<h2 className='addAVehicleCaption'>Añade los datos de tu vehículo:</h2>
			<div className='space10px'></div>
			<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
				<select className='selectButtonRegister' {...register('vehicle')}>
					<option hidden selected value='noVehicle'>
						Tipo de vehículo
					</option>
					<option value='carro'>Carro</option>
					<option value='moto'>Moto</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.vehicle?.message}
					</small>
				</span>
				<div className='space10px'></div>
				<select className='selectButtonRegister' {...register('color')}>
					<option hidden selected value='noColor'>
						Color
					</option>
					<option value='azul'>Azul</option>
					<option value='blanco'>Blanco</option>
					<option value='dorado'>Dorado</option>
					<option value='gris'>Gris</option>
					<option value='negro'>Negro</option>
					<option value='rojo'>Rojo</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.color?.message}
					</small>
				</span>
				<div className='space10px'></div>
				<input
					className='textField'
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
				<div className='space10px'></div>
				<input
					className='textField'
					type='text'
					placeholder='Marca'
					{...register('brand')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.brand?.message}
					</small>
				</span>
				<div className='space10px'></div>
				<input
					className='textField'
					type='number'
					placeholder='Modelo'
					{...register('model')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.model?.message}
					</small>
				</span>
				<div className='space10px'></div>
				<h2 className='createAPasswordCaption'>
					Por último, crea una contraseña segura:
				</h2>
				<div className='space10px'></div>
				<input
					className='textField'
					type='password'
					placeholder='Contraseña'
					{...register('password')}
				/>
				<div className='space10px'></div>
				<input
					className='textField'
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
				<div className='space16px'></div>
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
