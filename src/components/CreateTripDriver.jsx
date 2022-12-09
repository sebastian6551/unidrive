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
	const { logout, userVehicles, token } = useContext(AuthContext);
	const [routeTagInput, setRouteTagInput] = useState([]);
	const [message, setMessagge] = useState('Indica tu punto de');

	const createTrip = RegisterServices.createTrip;
	const navigate = useNavigate();

	const handleBack = event => {
		event.preventDefault();
		navigate('/bidder');
	};

	const optionVehicules =
		userVehicles !== null ? (
			userVehicles.map(vehicle => (
				<option key={vehicle.id} value={vehicle.id}>
					{vehicle.TypeVehicle.description} {vehicle.BrandVehicle.description} -{' '}
					{vehicle.plate}
				</option>
			))
		) : (
			<option value={0}>Sin vehiculos registrados</option>
		);

	// JSON.stringify(routeTagInput) To get the data from the tagsInput element

	const formSchema = Yup.object().shape({
		date: Yup.date().required('La fecha de partida es requerida').nullable(),
		hour: Yup.string().required('Completa el campo.'),
		vehicle: Yup.number()
			.required()
			.notOneOf(['noVehicle'], 'Selecciona un tipo de vehículo.'),
		available: Yup.number()
			.typeError('Completa el campo.')
			.required('Completa el campo.')
			.min(1, 'Los cupos deben ser entre 1 y 4.')
			.max(4, 'Los cupos deben ser entre 1 y 4.'),
		rate: Yup.number()
			.typeError('Completa el campo.')
			.required('Completa el campo.')
			.min(0, 'La tarifa ingresada no es válida.'),
		description: Yup.string()
			.typeError('Completa el campo.')
			.required('Completa el campo.'),
		toUniversity: Yup.boolean()
			.required()
			.notOneOf(['noToUniversity'], 'Selecciona un opción.'),
		meetPoint: Yup.string().required('Completa el campo.'),
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
		console.log(userVehicles);
		const fullData = { ...data, day: data.date.getDay() };
		const dataTrip = JSON.parse(
			JSON.stringify(fullData, [
				'vehicle',
				'date',
				'day',
				'rate',
				'description',
				'toUniversity',
				'meetPoint',
			])
		);
		console.log(dataTrip);
		createTrip(dataTrip, token).then(res => {
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
							<br></br>
							{errors.date?.message}
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
					title='Vehículo'
					{...register('vehicle')}
				>
					<option hidden value='noVehicle'>
						Vehículo
					</option>
					{optionVehicules}
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.Vehicle?.message}
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
					{...register('rate')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.rate?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<input
					className='textFieldCreateTripDriver'
					title='description'
					type='text'
					placeholder={'Ruta (barrios a recorrer)'}
					{...register('description')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.description?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<select
					className='selectFieldCreateTripDriver'
					title='toUniversity'
					{...register('toUniversity')}
					onChange={e => {
						if (e.target.value === true) {
							setMessagge('Indica tu punto de partida');
						} else {
							setMessagge('Indica tu punto de llegada');
						}
					}}
				>
					<option hidden value='noToUniversity'>
						¿Vas a la universidad?
					</option>
					<option value={true}>Si</option>
					<option value={false}>No</option>
				</select>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.toUniversity?.message}
					</small>
				</span>
				<div className='space9px'></div>
				<input
					className='textFieldCreateTripDriver'
					title={message}
					type='text'
					placeholder={message}
					{...register('meetPoint')}
				/>
				<span id='error' className='errorMessage'>
					<small>
						<br></br>
						{errors.meetPoint?.message}
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
						title='Crear'
						className='activateButton'
						type='submit'
						value='Crear'
					/>
				</div>
				<div className='space16px'></div>
			</form>
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};