import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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

	const getVideoLink = (item) => {
		const { link } = item;
		return `${link}`;
	};

	const getVideoTitle = (item) => {
		const { title } = item;
		return `${title}`;
	};

	return (
		<div className="App">
			{data &&
				data.map((item, idx) => (
					<div key={idx} className="video-container">
						<h3>{getVideoTitle(item)}</h3>
						{/* <span>{item.link.toString()}</span> */}
						<video disableRemotePlayback>
							<source src={getVideoLink(item)} type="video/webm" />
						</video>
					</div>
				))}
		</div>
	);
}

export default App;
