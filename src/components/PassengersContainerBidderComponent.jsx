export const PassengersContainerBidderComponent = ({
	passengerName,
	pickupPlace,
}) => {
	return (
		<div className='passengersContainer'>
			<label className='passengerNameCaption'>{passengerName}</label>
			<label className='pickupCaption'>Recoger en: {pickupPlace}</label>
		</div>
	);
};
