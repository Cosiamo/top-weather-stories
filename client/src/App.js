import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TopWeatherStories from "./components/TopWeatherStories";

function App() {
	const [data, setData] = useState([]); // using useState hook to create / edit state and initializing it as an array

	const callBackendApi = async () => {
		await axios
			.get("/express_backend")
			.then((resp) => setData(resp.data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		console.log("Calling backend upon page load!");
		callBackendApi(); // calling the fetch and setting the state
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
