import '../components/styles/searchTripRider.css';
import '../components/styles/principalDriver.css';
import AuthContext from '../hooks/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { AppBarComponent } from '../components/AppBarComponent';
import { TripInfoBidderComponent } from '../components/TripInfoBidderComponent';
import { CardComponent } from '../components/CardComponent';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import logOutArrow from '../assets/icons/logOutArrow.png';
import RiderServices from '../hooks/rider.services';
import jsonFormat from '../hooks/jsonFormat';
import stringFormat from '../hooks/stingFormat';

export const SearchTripRider = () => {
	const { logout, token } = useContext(AuthContext);
	const [trips, setTrips] = useState([]);
	const [dateTime, setDateTime] = useState(null);
	const [minHour, setMinminHour] = useState(null);
	const [minDate, setMinDate] = useState(null);
	const [toUniversity, setToUniversity] = useState(false);
	const [message, setMessagge] = useState('Punto de');

	// const searcVehicle = RiderServices.searcVehicle;
	const searchTrip = RiderServices.searchTrip;
	const sortArrayDate = jsonFormat.sortArrayDate;
	const setTime = stringFormat.setTime;
	const getHour = stringFormat.getHour;
	const setDay = stringFormat.setDay;
	const setMeetPoint = stringFormat.setMeetPoint;

	useEffect(() => {
		setMinDate(null);
		setMinminHour(null);
		const nowDate = dayjs();
		const limit = (nowDate.hour() + 1).toString();
		const limitHour = stringFormat.replaceAt(nowDate.format(), 11, limit);
		setMinDate(nowDate);
		setMinminHour(limitHour.substring(0, 16));
	}, []);

	const formSchema = Yup.object().shape({
		// dates: Yup.string().nullable().required('La fecha del viaje es requerida.'),
		// hour: Yup.string().required('La hora del viaje es requerida.'),
		toUniversity: Yup.boolean()
			.required()
			.notOneOf(['Si', 'No', '¿Vas a la universidad?'], 'Selecciona una opción')
			.label('Selecciona una opción'),
		meetPoint: Yup.string().required('Por favor llene el campo.'),
	});

	const formOptions = {
		resolver: yupResolver(formSchema),
	};

	const handleChange = event => {
		console.log(event.$d);
		setDateTime(dayjs(event.$d));
	};

	const {
		register,
		handleSubmit,
		// control,
		formState: { errors },
	} = useForm(formOptions);

	const onSubmit = data => {
		delete data.meetPoint;
		const fullData = { ...data, date: dateTime.$d, day: dateTime.$d.getDay() };
		console.log(fullData);
		searchTrip(token, fullData).then(res => {
			if (res.status === 200) {
				const req = res.json();
				console.log(req);
				req.then(value => {
					console.log(value);
					sortArrayDate(value);
					console.log(value);
					setTrips(value);
				});
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
	};

	const cards = Array.isArray(trips) ? (
		trips.map(point => (
			<div key={point.id}>
				<CardComponent
					key={point.id}
					id={point.id}
					day={setTime(point.date) + setDay(point.day)}
					hour={getHour(point.date)}
					startingPoint={
						point.toUniversity ? setMeetPoint(point.meetPoint) : 'Univalle'
					}
					meetPointPoint={
						point.toUniversity ? 'Univalle' : setMeetPoint(point.meetPoint)
					}
					typeUser='rider'
					other={[point.rate, point.description]}
				/>
				<div className='space9px'></div>
			</div>
		))
	) : (
		<h1>Cargando...</h1>
	);

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
			<div className='redDivDriver'>Buscar un viaje</div>
			<div className='space9px'></div>
			<div className='searchTripRiderBody'>
				<form className='searchTripFormRider' onSubmit={handleSubmit(onSubmit)}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						{/* <Controller
							name='date'
							control={control}
							defaultValue={null}
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<DateTimePicker
									label='Fecha y hora'
									value={dateTime}
									minDate={minDate}
									minTime={dayjs(minHour)}
									onChange={handleChange}
									renderInput={params => (
										// console.log(invalid),
										<TextField
											// helperText={errors.dates?.message}
											id='date'
											fullWidth
											color='primary'
											{...register('date')}
											{...params}
											// error={invalid}
										/>
									)}
								/>
							)}
						/> */}
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
					{/* <div className='rowFormRider'>
						<label className='captionFormRider'>Día:</label>
						<input
							className='selectFieldSearchTripRider'
							title='Día'
							type='date'
							{...register('dates')}
						></input>
					</div>
					<span id='errors' className='errorMessage'>
						<small>{errors.dates?.message}</small>
					</span>
					<div className='rowFormRider'>
						<label className='captionFormRider'>Hora estimada:</label>
						<input
							className='selectFieldSearchTripRider'
							title='Hora'
							type='time'
							placeholder='Hora'
							{...register('hour')}
						/>
					</div>
					<span id='error' className='errorMessage'>
						<small>{errors.hour?.message}</small>
					</span> */}
					<div className='rowFormRider'>
						<select
							className='selectFieldCreateTripDriver'
							title='toUniversity'
							{...register('toUniversity')}
							onChange={e => {
								if (e.target.value === 'true') {
									setToUniversity(true);
									setMessagge('Punto de partida');
								} else if (e.target.value === 'false') {
									setToUniversity(true);
									setMessagge('Punto de llegada');
								}
							}}
						>
							<option hidden value={false}>
								¿Vas a la universidad?
							</option>
							<option value={true}>Si</option>
							<option value={false}>No</option>
						</select>
					</div>
					<span id='error' className='errorMessage'>
						<small>
							<br></br>
							{errors.toUniversity?.message}
						</small>
					</span>
					{toUniversity && (
						<>
							<div className='rowFormRider'>
								<label className='captionFormRider'>{message}</label>
								<input
									className='selectFieldSearchTripRider'
									title={message}
									type='text'
									placeholder='Ej: San Fernando'
									{...register('meetPoint')}
								></input>
							</div>
							<span id='error' className='errorMessage'>
								<small>{errors.meetPoint?.message}</small>
							</span>
						</>
					)}
					<div className='buttonRowFormRider'>
						<input
							title='Buscar'
							className='buttonFormRider'
							type='submit'
							value='Buscar'
						/>
					</div>
				</form>
				{trips.length === 0 ? (
					<></>
				) : (
					<div>
						<div className='captionSearchTripRiderContainer'>
							<label className='captionSearchTripRider'>
								Opción más acertada
							</label>
						</div>
						<TripInfoBidderComponent
							dayCaption='1 enero'
							hourCaption='11:20'
							departureCaption='Palmira'
							meetPointCaption='Univalle'
							color='#EDBE44'
						/>
						<div className='captionSearchTripRiderContainer'>
							<label className='captionSearchTripRider'>Otras opciones</label>
						</div>
						{cards || <h1></h1>}
					</div>
				)}
			</div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
