/**
 * Insert a string in a position of another string
 * @param {string} str string to modified
 * @param {number} index position to insert
 * @param {string} replacement string to insert
 * @example replaceAt('hello Dr',6,'Sr') -> 'hello Sr'
 * @returns {string}
 */
const replaceAt = (str, index, replacement) => {
	return (
		str.substring(0, index) +
		replacement +
		str.substring(index + replacement.length)
	);
};

/**
 * Get the hour from a date in format ISO8601
 * @param {string} dateStr date in format ISO8601
 * @returns {string} hour
 * @example getHour('2020-05-05T12:00:00.000Z') -> '12:00'
 */
const getHour = dateStr => {
	return dateStr.substring(11, 16);
};

/**
 * Set the day of the week
 * @param {int} num
 * @returns string
 * @example setDay(1) -> 'Lunes'
 */
const setDay = num => {
	switch (num) {
		case 1:
			return 'Lunes';
		case 2:
			return 'Martes';
		case 3:
			return 'Miércoles';
		case 4:
			return 'Jueves';
		case 5:
			return 'Viernes';
		case 6:
			return 'Sabado';
		default:
			return 'Domingo';
	}
};

/**
 * Set the date in format 'dd/mm'
 * @param {string} str date in format ISO8601
 * @returns {string} date in format 'mm/dd'
 * @example setTime('Fri Jan 20 2023 21:49:16 GMT-0500') -> 'Jan 20'
 *
 * */
const setTime = str => {
	const date = new Date(str).toDateString();
	return date.substring(3, 11);
};

/**
 * Split a string by comma (,) and return the first two elements
 * @param {string} str
 * @returns {string} meet point
 * @example setMeetPoint('Carrera 26c 2 #77-43, Cali, Valle del Cauca, Colombia) -> 'Carrera 26c 2 #77-43, Cali'
 * */
const setMeetPoint = str => {
	const arr = str.split(',');
	return arr[0] + ',' + arr[1];
};

const stringFormat = {
	replaceAt,
	getHour,
	setDay,
	setTime,
	setMeetPoint,
};

export default stringFormat;
