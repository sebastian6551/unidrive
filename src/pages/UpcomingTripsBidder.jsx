import { AppBarComponent } from '../components/AppBarComponent';
import '../components/styles/navbar.css';

export const UpcomingTripsBidder = () => {
	return (
		<div>
			<h1>Upcoming Trip</h1>
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
