import React from "react";

const TopWeatherStories = ({ data }) => {
	// destructuring the props ^ that are passed down.

	return (
		<div className="video-container">
			<h1>Top Weather Stories</h1>
			{data.map((item, idx) => (
				<div key={idx}>
					<h3>{item.title}</h3>
					<a href={item.link}>Video</a>
				</div>
			))}
		</div>
	);
};

export default TopWeatherStories;
