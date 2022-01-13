import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TopWeatherStories from "./components/TopWeatherStories";

function App() {
	const [data, setData] = useState([]); // using useState hook to create / edit state and initializing it as an array

	const callBackendApi = async () => {
		const response = await fetch("/express_backend"); // fetching from the backend get method

		if (response.status !== 200) {
			// if response is bad it will throw an error!
			throw Error("Something went wrong!");
		}

		const body = await response.json();
		console.log("Body:", body); // checking the body from the response

		return body;
	};

	useEffect(() => {
		console.log("Calling backend upon page load!");
		callBackendApi().then((theData) => setData(theData)); // calling the fetch and setting the state
	}, []);

	return (
		<div className="App">
			{data && (
				<>
					<TopWeatherStories data={data} />
				</>
			)}
		</div>
	);
}

export default App;
