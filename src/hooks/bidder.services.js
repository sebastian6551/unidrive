const baseUrl = 'http://localhost:3000/';

const getVehicle = async auth => {
	const comp = 'bidder/vehicles';
	return await fetch(baseUrl + comp, {
		method: 'GET',
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json',
		},
	});
};

const getTrips = async auth => {
	const comp = 'bidder/trips';
	return await fetch(baseUrl + comp, {
		method: 'GET',
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json',
		},
	});
};

const BidderServices = {
	getVehicle,
	getTrips,
};

export default BidderServices;
