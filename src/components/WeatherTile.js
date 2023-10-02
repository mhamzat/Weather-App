import React from "react";

const WeatherTile = ({ weather }) => {
	return (
		<div id="WeatherData">
			<h2>Weather in {weather.name}</h2>
			<p>Temperature: {weather.main.temp}°C</p>
			<p>Feels like: {weather.main.feels_like}°C</p>
			<p>Humidity: {weather.main.humidity}%</p>
			<p>Wind: {weather.wind.speed} km/h</p>
		</div>
	);
};

export default WeatherTile;
