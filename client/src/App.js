import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState([]); // using useState hook to create / edit state and initializing it as an array

	const callBackendApi = async () => {
		const response = await fetch("/"); // fetching from the backend get method

		if (response.status !== 200) {
			// if response is bad it will throw an error!
			throw Error("Soemthing went wrong");
		}

		return response;
	};

	return <div className="App">hey</div>;
}

export default App;
