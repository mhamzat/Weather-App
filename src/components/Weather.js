import React, { useState } from "react";

const Weather = () => {
	const [city, setCity] = useState("");
	const [weatherData, setWeatherData] = useState(null);

	const apiKey = "5a0602e35ae2163e1dbfce4b1515f929";

	const fetchWeatherData = async () => {
		console.log("city: " + city);
		if (city === "") {
			return;
		}

		await fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" +
				city +
				"&appid=" +
				apiKey +
				"&units=metric"
		)
			.then((response) => response.json())
			.then((data) => {
				setWeatherData(data);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Enter city name"
				value={city}
				onChange={(event) => setCity(event.target.value)}
			/>
			<button onClick={fetchWeatherData}>Get Weather</button>

			{weatherData ? (
				<div>
					<h2>
						Weather in {weatherData.name}, {weatherData.sys.country}
					</h2>
					<p>Temperature: {weatherData.main.temp}°C</p>
					<p>Weather: {weatherData.weather[0].description}</p>
				</div>
			) : null}
		</div>
	);
};

export default Weather;
