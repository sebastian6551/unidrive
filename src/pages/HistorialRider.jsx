import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
import { CardComponent } from '../components/CardComponent';
import { AppBarComponent } from '../components/AppBarComponent';
import '../components/styles/navbar.css';

export const HistorialRider = () => {
	return (
		<div>
			<RedBoxInterfaceTitleComponent title='Historial' />
			<div className='space9px'></div>
			<CardComponent
				day='lunes'
				hour={'12:00'}
				startingPoint={'Univalle'}
				arrivalPoint={'Cali'}
				typeUser='rider'
				other={[]}
			/>
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
