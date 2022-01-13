import React from "react";

const TopWeatherStories = ({ data }) => {
	// destructuring the props ^ that are passed down.

	// using a function to destructure the items passed into it
	const getVideoLink = (item) => {
		const { link } = item;
		return `${link}`;
	};

	const getVideoTitle = (item) => {
		const { title } = item;
		return `${title}`;
	};

	return (
		<div className="video-container">
			<h1>Top Weather Stories</h1>
			{data.map((item, idx) => (
				<div key={idx}>
					<h3>{getVideoTitle(item)}</h3>
					<a href={getVideoLink(item)}>Video</a>
				</div>
			))}
		</div>
	);
};

export default TopWeatherStories;
