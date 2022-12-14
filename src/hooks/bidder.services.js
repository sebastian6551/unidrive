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

const disableTrip = async (auth, id) => {
	// const comp = `bidder/trips/:{id.id}`;
	const comp = 'bidder/trips/' + id;
	const obj = { id: id };
	console.log(comp);
	console.log(obj);
	return await fetch(baseUrl + comp, {
		method: 'PUT',
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(obj),
	});
};

const BidderServices = {
	getVehicle,
	getTrips,
	disableTrip,
};

export default BidderServices;
