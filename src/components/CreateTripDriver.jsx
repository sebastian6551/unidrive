import './styles/createTripDriver.css';
import './styles/principalDriver.css';
import AuthContext from '../hooks/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import RegisterServices from '../hooks/register.services';
import BidderServices from '../hooks/bidder.services';
import SuccessAlert from './alerts/SuccessAlert';
import stringFormat from '../hooks/stingFormat';
import PlacesAutocomplete from 'react-places-autocomplete';

export const CreateTripDriver = () => {
	const [dateTime, setDateTime] = useState(null);
	const [minHour, setMinminHour] = useState(null);
	const [minDate, setMinDate] = useState(null);
	const [address, setAddress] = useState('');

	const handleSelect = async value => {
		setAddress(value);
	};

	// limite principal search area to valle del cauca
	const searchOptions = {
		// eslint-disable-next-line no-undef
		location: new google.maps.LatLng(3.8008893, -76.64127119999999),
		radius: 200,
		types: ['address'],
	};

	const handleChange = event => {
		console.log(event.$d);
		setDateTime(dayjs(event.$d));
	};

	const { logout, token } = useContext(AuthContext);
	const [message, setMessagge] = useState('Indica tu punto de');
	const [vehicles, setVehicles] = useState();
	const [alert, setAlert] = useState(false);

	const createTrip = RegisterServices.createTrip;
	const getVehicle = BidderServices.getVehicle;
	const navigate = useNavigate();

	const handleAlertClose = () => setAlert(false);

	useEffect(() => {
		setVehicles(null);
		setMinDate(null);
		setMinminHour(null);
		const nowDate = dayjs();
		const limit = (nowDate.hour() + 1).toString();
		const limitHour = stringFormat.replaceAt(nowDate.format(), 11, limit);
		let ignore = false;
		getVehicle(token).then(res => {
			if (res.status === 200) {
				const req = res.json();
				req.then(value => {
					if (!ignore) {
						setVehicles(value);
					}
				});
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
		setMinDate(nowDate);
		setMinminHour(limitHour.substring(0, 16));
		return () => {
			ignore = true;
		};
	}, []);

	const handleBack = event => {
		event.preventDefault();
		navigate('/bidder');
	};

	const optionVehicules = Array.isArray(vehicles) ? (
		vehicles.map(vehicle => (
			<option key={vehicle.id} value={vehicle.id}>
				{vehicle.TypeVehicle.description} {vehicle.BrandVehicle.description} -{' '}
				{vehicle.plate}
			</option>
		))
	) : (
		<option value={0}>Sin vehiculos registrados</option>
	);

	const formSchema = Yup.object().shape({
		// date: Yup.date().required('La fecha de partida es requerida').nullable(),
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
		// meetPoint: Yup.string().required('Completa el campo.'),
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
		data.date = dateTime.$d;
		data.meetPoint = address;
		const fullData = { ...data, day: data.date.getDay() };
		console.log(fullData);
		const dataTrip = JSON.parse(
			JSON.stringify(fullData, [
				'vehicle',
				'date',
				'day',
				'hour',
				'rate',
				'description',
				'toUniversity',
				'meetPoint',
			])
		);
		console.log(dataTrip);
		createTrip(dataTrip, token).then(res => {
			if (res.status === 201) {
				setAlert(true);
				setTimeout(() => navigate('/bidder'), 1000);
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
				<div className='space9px'></div>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						title='date'
						label='Fecha y hora'
						value={dateTime}
						type='date'
						onChange={handleChange}
						minDate={minDate}
						minTime={dayjs(minHour)}
						renderInput={params => (
							<TextField {...params} {...register('date')} />
						)}
					/>
				</LocalizationProvider>
				<span id='error' className='errorMessage'>
					{errors.date?.type === 'required' && (
						<small>
							<br></br>
							{errors.date?.message}
						</small>
					)}
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
						if (e.target.value === 'true') {
							setMessagge('Indica tu punto de partida');
						} else if (e.target.value === 'false') {
							setMessagge('Indica tu punto de llegada');
						}
					}}
				>
					<option hidden value={false}>
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
				<PlacesAutocomplete
					value={address}
					onChange={setAddress}
					onSelect={handleSelect}
					searchOptions={searchOptions}
				>
					{({
						getInputProps,
						suggestions,
						getSuggestionItemProps,
						loading,
					}) => (
						<div>
							<input
								className='textFieldCreateTripDriver'
								title={message}
								{...getInputProps({ placeholder: message })}
								// {...register('meetPoint')}
							/>
							{/* <span id='error' className='errorMessage'>
								<small>
									<br></br>
									{errors.meetPoint?.message}
								</small>
							</span> */}
							<div>
								{loading ? <div>....is loading</div> : null}
								{suggestions.map(suggestion => {
									const className = suggestion.active
										? 'suggestion-item--active'
										: 'suggestion-item';
									// inline style for demonstration purpose
									const style = suggestion.active
										? { backgroundColor: '#fafafa', cursor: 'pointer' }
										: { backgroundColor: '#ffffff', cursor: 'pointer' };
									return (
										<div
											key={suggestion.index}
											{...getSuggestionItemProps(suggestion, {
												className,
												style,
											})}
										>
											{suggestion.description}
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
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
			<SuccessAlert
				open={alert}
				onClose={handleAlertClose}
				message={'Viaje creado exitosamene'}
			/>
		</div>
	);
};
