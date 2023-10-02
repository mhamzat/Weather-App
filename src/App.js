import React from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Weather Service App</h1>
				<Weather />
			</header>
		</div>
	);
}

export default App;
