import './styles/createTripDriver.css';
import './styles/principalDriver.css';
import AuthContext from '../services/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TagsInput } from 'react-tag-input-component';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import RegisterServices from '../services/registerServices';

export const CreateTripDriver = () => {
	const { logout } = useContext(AuthContext);
	const [routeTagInput, setRouteTagInput] = useState([]);
	const createTrip = RegisterServices.createTrip;
	const navigate = useNavigate();

	const handleBack = event => {
		event.preventDefault();
		navigate('/bidder');
	};

	// JSON.stringify(routeTagInput) To get the data from the tagsInput element

	const formSchema = Yup.object().shape({
		date: Yup.string()
			.required()
			.notOneOf(['noDate'], 'Selecciona una fecha de partida.'),
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

		createTrip(data).then(res => {
			if (res.status === 201) {
				alert('Viaje creado con exito');
				navigate('/bidder');
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
				<input
					className='selectFieldCreateTripDriver'
					type='date'
					{...register('date')}
				></input>
				<span id='error' className='errorMessage'>
					{errors.date?.type === 'required' && (
						<small>
							<br></br>El campo no puede estar vacío.
						</small>
					)}
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
						onClick={handleBack}
					/>
					<input
						title='Activar'
						className='activateButton'
						type='submit'
						value='Crear'
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
