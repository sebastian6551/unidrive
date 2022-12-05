import { AppBarComponent } from '../components/AppBarComponent';
import '../components/styles/navbar.css';

export const NotificationRider = () => {
	return (
		<div>
			<h1>Notification</h1>
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
