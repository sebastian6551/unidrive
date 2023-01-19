/**
 * Sorts an array of json objects by date
 * @param {Array} array of json objects
 */
const sortArrayDate = array => {
	array.sort(function (a, b) {
		return new Date(a.date) - new Date(b.date);
	});
};

const jsonFormat = {
	sortArrayDate,
};

export default jsonFormat;
