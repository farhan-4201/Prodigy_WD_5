const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'abf723e1a3msh6ecc52677c98e4cp123871jsnc78be51261fc',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchWeather() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchWeather();
