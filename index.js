const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");
const app = express();

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(
	cors({
		origin: "http://localhost:8000",
		credentials: true,
	})
);

// Website you want gather info from
const url = "https://weather.com";

// The Class or ID name of the element(s) you're targeting
const htmlElement = ".ContentMedia--listItem--xVM3X";

const articles = []; // intializing an empty array for the scraped articles to send to frontend

// Axios calls the http address from the url variable
axios(url)
	.then((response) => {
		// html variable records the data from the http response
		const html = response.data;

		// Cheerio picks out the HTML elements from the html variable
		const content = cheerio.load(html);

		// function after '.each' is a callback function
		content(htmlElement, html).each(function () {
			const title = content(this)
				.text()
				.replace(/(Video)/, "");
			const linkToVideo = url + content(this).attr("href");

			const fetchNestedVideoSrc = async (link) => {
				const videoElement = ".jw-video jw-reset";

				await axios(link).then((response) => {
					const pageHtml = response.data;
					const $ = cheerio.load(pageHtml);

					let videoTag = $(videoElement);
					console.log("HEYYY");
				});
			};

			fetchNestedVideoSrc(linkToVideo);

			// fills the empty articles array
			articles.push({
				title,
				link: linkToVideo,
			});
		});
		// calls the array and prints to the terminal
		// console.log("Articles", articles);
	})
	.catch((err) => console.log(err));

app.get("/express_backend", (request, response) => {
	// sending the articles to the frontend using an app get method
	response.send(JSON.stringify(articles)); //turning the data into a string
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
