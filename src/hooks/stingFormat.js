/**
 * Inserts a string at a given position, modifying the original string
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
 * "2022-12-31T16:50:00.000Z"
 * @param {string} dateStr date in format ISO8601
 * @returns {string} hour
 */
const getHour = dateStr => {
	return dateStr.substring(11, 16);
};

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

const setTime = str => {
	const date = new Date(str);
	const other = date.toDateString();
	return other.substring(3, 11);
};

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
