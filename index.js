const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://weather.com/'

axios(url)
    .then(response => {
        const html = response.data
        const content = cheerio.load(html)
        const articles = []

        content('.ContentMedia--listItem--xVM3X', html).each(function() {
            const title = content(this).text().replace(/(Video)/, "")
            const url = 'https://weather.com' + content(this).attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))