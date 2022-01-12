import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState(); // using useState hook to create / edit state and initializing it as an array

	useEffect(() => {
		console.log("calling backend");
		callBackendApi();
	}, []);

	const callBackendApi = async () => {
		const response = await fetch("/express_backend"); // fetching from the backend get method
		console.log(response);

		if (response.status !== 200) {
			// if response is bad it will throw an error!
			throw Error("Something went wrong");
		}
		setData(response);
	};

	return (
		<div className="App">
			Hey
			<div>{null}</div>
		</div>
	);
}

export default App;
