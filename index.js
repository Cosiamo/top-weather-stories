const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

// Website you want gather info from
const url = 'https://weather.com'
// The Class or ID name of the element you're targeting
const htmlElement = '.ContentMedia--listItem--xVM3X'

// Axios calls the http address from the url variable
axios(url)
    .then(response => {
        // html variable records the data from the http response
        const html = response.data
        // Cheerio picks out the HTML elements from the html variable
        const content = cheerio.load(html)
        const articles = []

        // function after '.each' is a callback function
        content(htmlElement, html).each(function() {
            const title = content(this).text().replace(/(Video)/, "")
            const link = url + content(this).attr('href')
            // fills the empty articles array 
            articles.push({
                title,
                link
            })
        })
        // calls the array and prints to the terminal
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))