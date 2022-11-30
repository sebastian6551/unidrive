import './styles/createTripDriver.css';
import './styles/principalDriver.css';
import AuthContext from '../services/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';

export const CreateTripDriver = () => {
	const { logout } = useContext(AuthContext);
	const [routeTagInput, setRouteTagInput] = useState([]);
	// JSON.stringify(routeTagInput) To get the data from the tagsInput element

	const formSchema = Yup.object().shape({
		day: Yup.string().required().notOneOf(['noDay'], 'Selecciona un día.'),
		hour: Yup.string().required('Completa el campo.'),
		typeVehicle: Yup.string()
			.required()
			.notOneOf(['noVehicle'], 'Selecciona un tipo de vehículo.'),
		available: Yup.number()
			.typeError('Completa el campo.')
			.required('Completa el campo.')
			.min(1, 'Los cupos deben ser entre 1 y 4.')
			.max(4, 'Los cupos deben ser entre 1 y 4.'),
		fee: Yup.number()
			.typeError('Completa el campo.')
			.required('Completa el campo.')
			.min(0, 'La tarifa ingresada no es válida.'),
		startingPoint: Yup.string().required('Completa el campo.'),
		arrivalPoint: Yup.string().required('Completa el campo.'),
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
		console.log(data);
	};

	return (
		<div>
			<div className='space2vh'></div>
			<span className='spaceLeftForLogOut'>
				<button
					className='logOutArrow'
					title='Cerrar sesión'
					type='button'
					onClick={logout}
				>
					<img src={logOutArrow} />
				</button>
			</span>
			<div className='space9px'></div>
			<div className='redDivDriver'>Viaje</div>
			<div className='space9px'></div>
			<form className='loginFormDriver' onSubmit={handleSubmit(onSubmit)}>
				<select
					className='selectFieldCreateTripDriver'
					title='Día'
					{...register('day')}
				>
					<option hidden value='noDay'>
						Día
					</option>
					<option value={1}>Lunes</option>
					<option value={2}>Martes</option>
					<option value={3}>Miércoles</option>
					<option value={4}>Jueves</option>
					<option value={5}>Viernes</option>
					<option value={6}>Sábado</option>
					<option value={7}>Domingo</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.day?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<input
					className='textFieldCreateTripDriver'
					title='Hora'
					type='time'
					placeholder='Hora'
					{...register('hour')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.hour?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<select
					className='selectFieldCreateTripDriver'
					title='Tipo de vehículo'
					{...register('typeVehicle')}
				>
					<option hidden value='noVehicle'>
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
				<input
					className='textFieldCreateTripDriver'
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
				<input
					className='textFieldCreateTripDriver'
					title='Tarifa'
					type='number'
					placeholder='Tarifa'
					{...register('fee')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.fee?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<TagsInput
					classNames={{ input: 'tagsInputField', tag: 'tagsCaption' }}
					value={routeTagInput}
					onChange={setRouteTagInput}
					separators={['Enter', ',']}
					name='Ruta (barrios a recorrer)'
					required={true}
					placeHolder='Ruta (barrios a recorrer)'
				/>
				<div className='space9px'></div>
				<input
					className='textFieldCreateTripDriver'
					title='Punto de partida'
					type='text'
					placeholder='Punto de partida'
					{...register('startingPoint')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.startingPoint?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<input
					className='textFieldCreateTripDriver'
					title='Punto de llegada'
					type='text'
					placeholder='Punto de llegada'
					{...register('arrivalPoint')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.arrivalPoint?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<div className='buttonsLineCreateTripDriver'>
					<input
						title='Cancelar'
						className='cancellButton'
						type='button'
						value='Cancelar'
					/>
					<input
						title='Activar'
						className='activateButton'
						type='submit'
						value='Activar'
					/>
				</div>
				<div className='space16px'></div>
			</form>
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
