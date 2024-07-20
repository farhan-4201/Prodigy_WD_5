
const apiUrl = 'https://api.weatherapi.com/v1/current.json';
const apiKey = '7f97e3f82d4244c9a58101541242007';


async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('weather-info').innerHTML = `<p>Unable to fetch weather data. Please try another city.</p>`;
    }
}


function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const { location, current } = data;

    weatherInfo.innerHTML = `
        <h2>Weather in ${location.name}, ${location.country}</h2>
        <p><strong>Temperature:</strong> ${current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${current.condition.text}</p>
        <p><strong>Humidity:</strong> ${current.humidity}%</p>
        <p><strong>Wind:</strong> ${current.wind_kph} kph</p>
        <img src="${current.condition.icon}" alt="${current.condition.text}" />
    `;
}


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});

