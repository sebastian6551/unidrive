import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
import { CardComponent } from '../components/CardComponent';
import { AppBarComponent } from '../components/AppBarComponent';
import '../components/styles/navbar.css';

export const HistorialBidder = () => {
	return (
		<div>
			<RedBoxInterfaceTitleComponent title='Historial' />
			<CardComponent />
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
