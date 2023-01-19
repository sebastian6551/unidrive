import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
// import { CardComponent } from '../components/CardComponent';
// import { AppBarComponent } from '../components/AppBarComponent';
// import logOutArrow from '../assets/icons/logOutArrow.png';
import whatsappIcon from '../assets/icons/whatsappIcon.png';
// import { useContext } from 'react';
// import AuthContext from '../hooks/AuthContext';
import '../components/styles/tripDetailBidder.css';

export const DetailTripRider = props => {
	// const { logout } = useContext(AuthContext);

	return (
		<div>
			{/* <span className='spaceLeftForLogOut'>
				<button
					className='logOutArrow'
					title='Cerrar sesión'
					type='button'
					onClick={logout}
				>
					<img src={logOutArrow} />
				</button>
			</span> */}
			<RedBoxInterfaceTitleComponent title='Detalles del viaje' />
			{/*
			<div className='cardPosition'>
				<CardComponent />
			</div> */}
			{/* day={props.day}
						hour={props.hour}
						startingPoint={props.startingPoint}
						arrivalPoint={props.arrivalPoint} */}

			<div className='cardInfoContainer'>
				<label>Tipo de transporte: </label>

				<label>Punto de partida: {props.startingPoint}</label>

				<label>Punto de llegada: {props.arrivalPoint} </label>

				<label>
					Fecha y hora: {props.day} - {props.hour}
				</label>

				<label>Ruta: {props.description}</label>

				<label>Tarifa: {props.rate}</label>
				{props.typeUser === 'rider' && (
					<>
						<label>Conductor: </label>

						<button className='whatsapp_BookingButton'>
							Contactar conductor
							<img src={whatsappIcon} />
						</button>

						<label>Cupos disponibles: </label>
						<button className='whatsapp_BookingButton'>Reservar cupo</button>
					</>
				)}
			</div>
		</div>
	);
};
