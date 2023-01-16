const baseUrl = 'http://localhost:3000/';

/**
 * Get all vehicles
 * @param {string} auth token
 * @returns Promise<Response>
 */
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

/**
 * Get all trips
 * @param {string} auth token
 * @returns Promise<Response>
 *
 * */
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

/**
 * Disable a trip by id
 * @param {String} auth
 * @param {int} id
 * @returns Promise<Response>
 */
const disableTrip = async (auth, id) => {
	const comp = 'bidder/trips/:' + id;
	console.log(comp);
	return await fetch(baseUrl + comp, {
		method: 'PUT',
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id }),
	});
};

const BidderServices = {
	getVehicle,
	getTrips,
	disableTrip,
};

export default BidderServices;
