const baseUrl = 'http://localhost:3000/';

/**
 * Search all vehicles
 * @param {string} auth token
 * @returns Promise<Response>
 */
const searcVehicle = async auth => {
	const comp = 'rider/search';
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
 * Search a trip by query
 * @param {string} auth
 * @param {JSON} query {toUniversity, date, day}
 * @returns Promise<Response>
 */
const searchTrip = async (auth, query) => {
	const comp = 'rider/search?';
	return await fetch(baseUrl + comp + new URLSearchParams(query), {
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

const RiderServices = {
	searcVehicle,
	searchTrip,
};

export default RiderServices;
