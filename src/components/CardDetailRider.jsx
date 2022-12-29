import { RedBoxInterfaceTitleComponent } from './RedBoxInterfaceTitleComponent';
import { CardComponent } from './CardComponent';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import whatsappIcon from '../assets/icons/whatsappIcon.png';
import { useContext } from 'react';
import AuthContext from '../hooks/AuthContext';
import './styles/tripDetailBidder.css';


export const CardDetailRider = props => {
	const { logout } = useContext(AuthContext);

	return (
		<div>
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
			<RedBoxInterfaceTitleComponent title='Detalles del viaje'/>

			<div className='cardPosition'>
				<CardComponent />
			</div>
			
			<div className='cardInfoContainer'>
				
				<label>Tipo de transporte: </label>
				
				<label>Ruta: </label>
				
				<label>Tarifa: </label>
				
				<label>Conductor: </label>
				
				<button className='whatsapp_BookingButton' 
					>Contactar conductor  
				<img  src={whatsappIcon} />
				</button>
				
				<label>Cupos disponibles: </label>
				<button className='whatsapp_BookingButton' 
					>Reservar cupo 
				
				</button>

			</div>
			
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
			
		</div>
	);
};
