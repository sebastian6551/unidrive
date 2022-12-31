import '../components/styles/searchTripRider.css';
import '../components/styles/principalDriver.css';
import AuthContext from '../hooks/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext } from 'react';
import { AppBarComponent } from '../components/AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';

export const SearchTripRider = () => {
	const { logout } = useContext(AuthContext);

	const formSchema = Yup.object().shape({
		dates: Yup.string().required('La fecha del viaje es requerida.'),
		hour: Yup.string().required('La hora del viaje es requerida.'),
		departure: Yup.string().required('Escribe un punto de partida.'),
		arrival: Yup.string().required('Escribe un punto de llegada.'),
	});

	const formOptions = {
		resolver: yupResolver(formSchema),
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(formOptions);

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
				<form className='searchTripFormRider' onSubmit={handleSubmit()}>
					<div className='rowFormRider'>
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
					</span>
					<div className='rowFormRider'>
						<label className='captionFormRider'>Punto de partida:</label>
						<input
							className='selectFieldSearchTripRider'
							title='Punto de partida:'
							type='text'
							placeholder='Ej: Univalle'
							{...register('departure')}
						></input>
					</div>
					<span id='error' className='errorMessage'>
						<small>{errors.departure?.message}</small>
					</span>
					<div className='rowFormRider'>
						<label className='captionFormRider'>Punto de llegada:</label>
						<input
							className='selectFieldSearchTripRider'
							title='Punto de llegada:'
							type='text'
							placeholder='Ej: San Fernando'
							{...register('arrival')}
						></input>
					</div>
					<span id='error' className='errorMessage'>
						<small>{errors.arrival?.message}</small>
					</span>
					<div className='buttonRowFormRider'>
						<input
							title='Buscar'
							className='buttonFormRider'
							type='submit'
							value='Buscar'
						/>
					</div>
				</form>
			</div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
